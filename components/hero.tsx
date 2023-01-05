import { useEffect, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { motion } from "framer-motion"
import styles from "./hero.module.scss"

interface HeroProps {
    currentPage?: string,
    imgSrc: StaticImageData
}

export default function Hero({ currentPage = "home", imgSrc }: HeroProps) {
    const [lightMode, setLightMode] = useState(false)
    const motionStates = {
        initial: {
            opacity: 0
        },
        loaded: {
            opacity: lightMode ? 0.9 : 0.7
        },
        exit: {
            opacity: 0
        }
    }

    useEffect(() => {
        setLightMode(window.matchMedia("(prefers-color-scheme:light)").matches)
    }, [])

    return (
        <motion.figure
            className={styles.hero}
            variants={motionStates}
            initial="initial"
            animate="loaded"
            exit="exit"
            transition={{ ease: "easeIn", duration: .25, delay: .25 }}>
            <Image src={imgSrc} alt={currentPage} fill priority quality="100" />
        </motion.figure>
    )
}