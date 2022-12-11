import Link from 'next/link'
import styles from './footer.module.scss'

export default function Footer() {
    const copyright = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <nav>
                <ul>
                    <li><Link key="email" href="mailto:tavis.tucker@gmail.com?subject=Getting in touch...">Email</Link></li>
                    <li><Link key="discord" href="https://discord.com/users/1043695714024312872">Discord</Link></li>
                    <li><Link key="linkedin" href="https://www.linkedin.com/in/tavistucker">LinkedIn</Link></li>
                </ul>
            </nav>
            <small>© {copyright} Tavis Tucker</small>
        </footer>
    )
}
