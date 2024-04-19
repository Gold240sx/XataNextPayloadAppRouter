'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { slideUp, perspective, opacity } from './anim'
import Header from '../../../header'
import './styles.css'

export default function Layout({ children }: { children: ReactNode }) {
  const anim = (variants: any) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants
    }
  }

  return (
    <div className='inner'>
      <motion.div className='slide' {...anim(slideUp)} />
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <Header />
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}
