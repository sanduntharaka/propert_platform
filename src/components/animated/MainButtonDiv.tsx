"use client"
import React from 'react'
import { motion } from 'framer-motion';


export const MainButtonDiv = ({ ButtonText, ButtonImage }: MainButton) => {
    return (
        <motion.button
            className="relative w-32 h-12 flex items-center justify-center gap-4 overflow-hidden border-b-2 border-blue-500 "
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
        >
            {/* Sliding Background */}
            <motion.div
                className="absolute inset-0 bg-white"
                variants={{
                    rest: { y: "100%" }, // Background starts hidden
                    hover: { y: "0%" },  // Background slides up on hover
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            />

            {/* Original Background */}
            <motion.div
                className="absolute inset-0 bg-primary-button"
                variants={{
                    rest: { y: "0%" },   // Original background visible
                    hover: { y: "-100%" }, // Original background slides up on hover
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            />

            {/* Text */}
            <motion.span
                className="relative z-10 text-white flex items-center gap-4 text-base"
                variants={{
                    rest: { color: "#FFF" }, // White text by default
                    hover: { color: "#000" }, // Black text on hover
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                {ButtonText}
                {ButtonImage}
            </motion.span>
        </motion.button>
    )
}
