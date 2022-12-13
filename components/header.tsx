import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./header.module.scss"

interface HeaderProps {
    currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
    const router = useRouter();
    const currentRoute = router.pathname;
    
    return (
        <header className={styles.header}>
            <Link href="/">
				<h1>tavis.me</h1>
				<h2>The Curriculum Vitae</h2>
			</Link>
            <nav>
                <ul>
                    <li key="bio"><Link href="/bio" className={currentRoute === "/bio" ? "current" : ""}>Bio</Link></li>
                    <li key="mission"><Link href="/mission" className={currentRoute === "/mission" ? "current" : ""}>Mission</Link></li>
                    <li key="projects"><Link href="/projects" className={currentRoute === "/projects" ? "current" : ""}>Projects</Link></li>
                    <li key="services"><Link href="/services" className={currentRoute === "/services" ? "current" : ""}>Services</Link></li>
                    <li key="contact"><Link href="/contact" className={currentRoute === "/contact" ? "current" : ""}>Contact</Link></li>
                    <li key="resume"><Link href="/resume" className={currentRoute === "/resume" ? "current" : ""}>Resumé</Link></li>
                </ul>
            </nav>
        </header>
    )
}
