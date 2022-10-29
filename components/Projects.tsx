import React from 'react';
import {motion} from 'framer-motion'
import {Project} from "typings";
import {urlFor} from "sanity";
import Image from "next/image";
import warning from "@/public/img/warning.svg";

type Props = {
  projects: Project[]
}

export default function Projects({projects}: Props) {
  return (
    <section
      id='projects'
      className='min-h-screen flex flex-col relative text-left pt-32 md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>

       {/*className='min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'*/}
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className='flex flex-col align-center'>
        <Image src={warning} alt="" width={50} height={50} />
        <p className='mt-5'>Content under development...</p>
      </div>

      {/*<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>*/}
      {/*  {projects.map(project => (*/}
      {/*    <div*/}
      {/*      key={project._id}*/}
      {/*      className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md: p-44 h-screen'>*/}
      {/*      <motion.img initial={{y: -300, opacity: 0}} transition={{duration: 1}} whileInView={{y: 0, opacity: 1}}*/}
      {/*                  viewport={{once: true}}*/}
      {/*                  src={urlFor(project.image).url()}*/}
      {/*                  alt=""/>*/}
      {/*      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>*/}
      {/*        <h4 className='text-4xl font-semibold text-center'>*/}
      {/*          <span className='underline decoration-[#F7AB0A]/50'>{project.title}</span>*/}
      {/*        </h4>*/}
      {/*        <p className='text-lg text-center md:text-left'>*/}
      {/*          {project.summary}*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </section>
  )
}
