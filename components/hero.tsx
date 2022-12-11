import Image, { type StaticImageData } from 'next/image'
import styles from './hero.module.scss'

interface HeroProps {
    currentPage?: string,
    imgSrc: StaticImageData,
    loading: boolean
}

export default function Hero({ currentPage = 'home', imgSrc, loading = false }: HeroProps) {
    return (
        <figure className={loading ? `${styles.hero} ${styles.loading}` : styles.hero}>
            <Image src={imgSrc} alt={currentPage} fill priority quality="100" />
        </figure>
    )
}