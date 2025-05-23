"use client"
import React from 'react'
import { motion } from 'framer-motion';


export const MainButton = ({ ButtonText, ButtonImage }: MainButton) => {
    return (
        <motion.button
            className="relative lg:w-32 lg:h-12 md:w-16 md:h-7 sm:w-32 sm:h-12 flex items-center justify-center gap-4 overflow-hidden "
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
        >
            {/* Sliding Background */}
            <motion.div
                className="absolute inset-0 bg-white border border-black"
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
                className="relative z-10 text-white flex items-center lg:gap-4 md:gap-1 sm:gap-4 lg:text-base md:text-[10px] sm:text-base"
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
