"use client"
import React from 'react'
import { motion } from 'framer-motion';


export const MainButton = ({ ButtonText, ButtonImage }: MainButton) => {
    return (
        <motion.button
            className="relative w-32 h-12 flex items-center justify-center gap-4 overflow-hidden "
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* Sliding Background */}
            <motion.div
                className="absolute inset-0 bg-gray-400"
                variants={{
                    rest: { y: "100%" }, // Background starts hidden
                    hover: { y: "0%" },  // Background slides up on hover
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Original Background */}
            <motion.div
                className="absolute inset-0 bg-primary-button"
                variants={{
                    rest: { y: "0%" },   // Original background visible
                    hover: { y: "-100%" }, // Original background slides up on hover
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Text */}
            <motion.span
                className="relative z-10 text-white flex items-center gap-4 text-base"
                variants={{
                    rest: { color: "#FFF" }, // White text by default
                    hover: { color: "#000" }, // Black text on hover
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                {ButtonText}
                {ButtonImage}
            </motion.span>
        </motion.button>
    )
}
