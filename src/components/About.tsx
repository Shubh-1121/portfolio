"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";

export function About() {
    return (
        <AuroraBackground className="bg-black text-white">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center" style={{textShadow:"4px 0px 5px rgba(0,0,0,1)"}}>
                    <span className="text-secondaryLight" style={{textShadow:"0px 0px 4px rgba(250,250,250,1)"}}>Maximize</span> your reach with
                </div>
                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                    professionally edited videos.
                </div>
                <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                    Debug now
                </button>
            </motion.div>
        </AuroraBackground>
    );
}
