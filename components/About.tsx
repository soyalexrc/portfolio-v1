import React from 'react';
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <motion.section
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center snap-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img
        initial={{x: -200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 1}}
        src='/img/paris-profile.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-65 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-4 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam ducimus officiis quae sint. Error excepturi possimus vero? Commodi eaque, error inventore nobis officia repudiandae saepe sit tempora veniam voluptatibus?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam ducimus officiis quae sint. Error excepturi possimus vero? Commodi eaque, error inventore nobis officia repudiandae saepe sit tempora veniam voluptatibus?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam ducimus officiis quae sint. Error excepturi possimus vero? Commodi eaque, error inventore nobis officia repudiandae saepe sit tempora veniam voluptatibus?</p>
      </div>
    </motion.section>
  )
}
