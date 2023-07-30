import { CorsOptions } from 'cors'

const allowedOrigins: string[] = ['http://localhost:2003']

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin!) === -1 || !origin) {
            callback(null, true)
        }
        throw new Error('Origin is not allowed!')
    },
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true
}

export default corsOptions