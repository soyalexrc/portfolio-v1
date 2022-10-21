import React from 'react';
import {motion} from 'framer-motion'
import ExperienceCard from "components/ExperienceCard";
import {Experience} from "typings";

type Props = {
  experiences: Experience[]
}

export default function WorkExperience({experiences}: Props) {
  return (
    <motion.section
      id='experience'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      className='min-h-screen flex flex-col relative text-left pt-32 md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>Experience</h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        {
          experiences.map(experience => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        }
      </div>
    </motion.section>
  )
}
