import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter"
import BackgroundCircles from "components/BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import {PageInfo} from "typings";
import {urlFor} from "sanity";

type Props = {
  pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi!, my name is ${pageInfo.name}.`,
      `I am a ${pageInfo.role}.`,
      "I Love React 💙.",
      "I love to build things for the internet."
    ],
    loop: true,
    delaySpeed: 2500
  })
  return (
    <section id="hero"
             className="min-h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles/>
      <Image unoptimized={true} width={120} alt="img" height={120} className="relative rounded-full mx-auto object-cover" src={urlFor(pageInfo.profilePic).url()} />
      {/*<img className="relative rounded-full h-32 w-32 mx-auto object-cover " src={urlFor(pageInfo.profilePic).url()} alt=""/>*/}
      <div className="z-20 pt-5">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo.role}</h2>
        <h1 className="text-5xl lg: text-6xl font-semibold scroll-pw-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A"/>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
