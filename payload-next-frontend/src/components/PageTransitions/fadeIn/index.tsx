'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 26, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}
