import React from 'react';
import {motion} from 'framer-motion'
import Image from 'next/image'
import {PageInfo} from "typings";

type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.section
      id='about'
      className='min-h-screen'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl text-center '>About</h3>
      <div className=' flex flex-col relative text-center md:text-left md:flex-row max-w-7xl  px-10 justify-evenly mx-auto items-center '>
        <motion.img
          initial={{x: -200, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 1}}
          src='/img/paris-profile.jpg'
          className='my-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-65 md:h-95 xl:w-[400px] xl:h-[500px]'
        />
        <div className='space-y-10 px-4 md:px-10'>
          <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
          {pageInfo.backgroundInformation}
        </div>
      </div>

    </motion.section>
  )
}
