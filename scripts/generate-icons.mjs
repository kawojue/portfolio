import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

const BG = [0x10, 0x12, 0x14, 0xff];
const LINE = [0x24, 0x29, 0x2d, 0xff];
const SIGNAL = [0x5e, 0xea, 0xd4, 0xff];

function crc32(buffer) {
    let crc = 0xffffffff;
    for (const byte of buffer) {
        crc ^= byte;
        for (let i = 0; i < 8; i += 1) {
            crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
        }
    }
    return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
    const header = Buffer.from(type);
    const payload = Buffer.concat([header, data]);
    const out = Buffer.alloc(12 + data.length);
    out.writeUInt32BE(data.length, 0);
    payload.copy(out, 4);
    out.writeUInt32BE(crc32(payload), 8 + data.length);
    return out;
}

function writePng(path, width, height, rgba) {
    const raw = Buffer.alloc((width * 4 + 1) * height);
    for (let y = 0; y < height; y += 1) {
        const row = y * (width * 4 + 1);
        raw[row] = 0;
        rgba.copy(raw, row + 1, y * width * 4, (y + 1) * width * 4);
    }

    const png = Buffer.concat([
        Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
        chunk(
            "IHDR",
            Buffer.from([
                (width >> 24) & 255,
                (width >> 16) & 255,
                (width >> 8) & 255,
                width & 255,
                (height >> 24) & 255,
                (height >> 16) & 255,
                (height >> 8) & 255,
                height & 255,
                8,
                6,
                0,
                0,
                0,
            ]),
        ),
        chunk("IDAT", deflateSync(raw, { level: 9 })),
        chunk("IEND", Buffer.alloc(0)),
    ]);

    writeFileSync(path, png);
}

function setPixel(rgba, width, x, y, color) {
    if (x < 0 || y < 0 || x >= width || y >= width) {
        return;
    }
    const i = (y * width + x) * 4;
    rgba[i] = color[0];
    rgba[i + 1] = color[1];
    rgba[i + 2] = color[2];
    rgba[i + 3] = color[3];
}

function fillRect(rgba, width, x0, y0, x1, y1, color) {
    for (let y = y0; y < y1; y += 1) {
        for (let x = x0; x < x1; x += 1) {
            setPixel(rgba, width, x, y, color);
        }
    }
}

function inRoundedRect(x, y, size, radius) {
    const max = size - 1;
    const cx = x < radius ? radius - x : x > max - radius ? x - (max - radius) : 0;
    const cy = y < radius ? radius - y : y > max - radius ? y - (max - radius) : 0;
    if (cx === 0 || cy === 0) {
        return true;
    }
    return cx * cx + cy * cy <= radius * radius;
}

function drawIcon(size) {
    const rgba = Buffer.alloc(size * size * 4);
    const radius = Math.round(size * 0.18);
    const border = Math.max(1, Math.round(size / 32));

    for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
            if (!inRoundedRect(x, y, size, radius)) {
                continue;
            }
            const inner = inRoundedRect(
                x,
                y,
                size,
                Math.max(0, radius - border),
            );
            const onEdge =
                x < border ||
                y < border ||
                x >= size - border ||
                y >= size - border ||
                !inner;
            setPixel(rgba, size, x, y, onEdge ? LINE : BG);
        }
    }

    // Monospace "$" as a unit grid so every size stays crisp.
    const unit = size / 32;
    const glyph = [
        [14, 6, 18, 8],
        [10, 9, 22, 11],
        [8, 11, 12, 15],
        [10, 15, 22, 17],
        [20, 17, 24, 21],
        [10, 21, 22, 23],
        [14, 24, 18, 26],
    ];

    for (const [x0, y0, x1, y1] of glyph) {
        fillRect(
            rgba,
            size,
            Math.round(x0 * unit),
            Math.round(y0 * unit),
            Math.round(x1 * unit),
            Math.round(y1 * unit),
            SIGNAL,
        );
    }

    return rgba;
}

const targets = [
    ["favicon-32.png", 32],
    ["apple-touch-icon.png", 180],
    ["icon-192.png", 192],
    ["icon-512.png", 512],
];

for (const [name, size] of targets) {
    writePng(join(outDir, name), size, size, drawIcon(size));
}

console.log(`wrote ${targets.map(([name]) => name).join(", ")}`);
