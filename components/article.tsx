import { useEffect, useState } from "react"
import { ReactNode } from 'react'
import { motion } from "framer-motion"
import styles from "./article.module.scss"

interface ArticleProps {
    children: ReactNode
}

export default function Article({children}: ArticleProps) {
    const [isMobile, setIsMobile] = useState(false)
    const motionStates = {
        initial: {
            top: "100%"
        },
        animate: {
            top: "11%"
        },
        exit: {
            top: "-100%"
        }
    }

    // this will only work on page load which will have to be good enough
    useEffect(() => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }, [])

    return (
        <motion.article
            className={styles.article}
            variants={!isMobile ? motionStates : undefined}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ ease: "easeOut", duration: .375 }}>
                {children}
        </motion.article>
    )
}