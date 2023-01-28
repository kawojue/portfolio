import styles from './styles/page.module.css'

const Home: React.FC = () => {
    return (
        <p className={`text-2xl ${styles.tag}`}>
            Hello, Always Appear!
        </p>
    )
}

export default Home;