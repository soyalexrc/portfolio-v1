import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from "components/BackgroundCircles";
import Link from 'next/link';


export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'Hi!, my name is Alex Rodriguez.',
      'I am a web developer based in Lima, Peru.',
      'I love to build things that lives in the internet'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <section id='hero' className='h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden snap-center'>
      <BackgroundCircles/>
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover ' src="/img/profile.jpg" alt=""/>
      <div className='z-20 pt-5'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software developer</h2>
        <h1 className='text-5xl lg: text-6xl font-semibold scroll-pw-10'>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
