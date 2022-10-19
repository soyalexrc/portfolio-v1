import React from 'react';
import {SocialIcon} from 'react-social-icons';
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className='sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20 xl: items-center px-5'>
      <motion.div
        initial={{x: -100, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{ duration: 0.7}}
        className='flex flex-row items-center'
      >
        {/*  social icons */}
        <SocialIcon
          url='https://youtube.com'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://youtube.com'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://youtube.com'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{x: 100, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{ duration: 0.7}}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
      </motion.div>
    </header>
  )
}
