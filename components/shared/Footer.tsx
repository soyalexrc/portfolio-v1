import React from 'react';
import Link from 'next/link'

export default function Footer() {
  return (
    <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="https://i.imgur.com/e2yvD6A.png" alt=""/>
        </div>
      </footer>
    </Link>
  )
}
