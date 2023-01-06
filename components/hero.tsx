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
    const [isMobile, setIsMobile] = useState(false)
    const motionStates = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: lightMode ? 0.9 : 0.75 // would be good to use CSS variables here and in the module.scss for DRYness
        },
        exit: {
            opacity: 0
        }
    }

    // this will only work on page load which will have to be good enough until a proper theme switch/override exists
    useEffect(() => {
        setLightMode(window.matchMedia("(prefers-color-scheme:light)").matches)
        setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }, [])

    return (
        <motion.figure
            className={styles.hero}
            variants={!isMobile ? motionStates : undefined}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ ease: "easeIn", duration: .375 }}>
            <Image src={imgSrc} alt={currentPage} fill priority quality="100" />
        </motion.figure>
    )
}