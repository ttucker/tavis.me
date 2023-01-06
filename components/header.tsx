import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./header.module.scss"
import { cardo, ptSans } from "../pages/_app"

interface HeaderProps {
    setLoading?: Function
}

export default function Header({ setLoading }: HeaderProps) {
    const { asPath: path } = useRouter()
    
    return (
        <header className={styles.header}>
            <Link href="/">
                <h1 className={cardo.className}>tavis.me</h1>
                <h2 className={ptSans.className}>The Curriculum Vitae</h2>
            </Link>
            <nav>
                <ul>
                    <li key="bio"><Link href="/bio" className={path === "/bio" ? "current" : ""}>Bio</Link></li>
                    <li key="mission"><Link href="/mission" className={path === "/mission" ? "current" : ""}>Mission</Link></li>
                    <li key="projects"><Link href="/projects" className={path === "/projects" ? "current" : ""}>Projects</Link></li>
                    <li key="services"><Link href="/services" className={path === "/services" ? "current" : ""}>Services</Link></li>
                    <li key="contact"><Link href="/contact" className={path === "/contact" ? "current" : ""}>Contact</Link></li>
                    <li key="resume"><Link href="/resume" className={path === "/resume" ? "current" : ""}>Resumé</Link></li>
                </ul>
            </nav>
        </header>
    )
}
