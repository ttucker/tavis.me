import { useEffect, useState } from "react"
import { ReactNode } from 'react'
import { motion } from "framer-motion"
import styles from "./article.module.scss"

interface ArticleProps {
    children: ReactNode
}

export default function Article({children}: ArticleProps) {
    const [isMobile, setIsMobile] = useState(false)
    let motionStates = {
        initial: {
            opacity: Number(!isMobile),
            top: isMobile ? "auto" : "100%"
        },
        animate: {
            opacity: 1,
            top: isMobile ? "auto" : "11%"
        },
        exit: {
            opacity: Number(!isMobile),
            top: isMobile ? "auto" : "-200%"
        }
    }

    // this will only work on page load which will have to be good enough
    useEffect(() => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }, [])

    return (
        <motion.article
            className={styles.article}
            variants={motionStates}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ ease: "easeOut", duration: .375 }}>
                {children}
        </motion.article>
    )
}