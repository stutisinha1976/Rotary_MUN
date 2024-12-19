'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";





const Nav = () => {



  return (
    <div className=''>
    <nav className='flex  bg-[#B1F0F7]  justify-between px-6 '>
      <div>
        <Image
        className=""
        src="/logo.png"
        alt="Next.js logo"
        width={100}
        height={100}
        />
      </div>

      <div className='flex gap-14 font-serif text-2xl font-medium text-[#81BFDA] items-center mr-16 sm:display-none lg:gap-8 lg:text-lg lg:mr-0 sm:text-sm'>
        <Link href="/" className=" ">Home</Link>
        <Link href="/#about" className=" ">About Us</Link>
        <Link href="/#guidelines" className=" ">Register</Link>
        <Link href="/#working" className=" ">About Rotaract</Link>
        <Link href="/#faq" className=" ">Our Team</Link>
        <Link href="/#faq" className=" ">Sponsors</Link>
       
      </div>
      
      
    </nav>
    
   
    </div>
    
  )
}

export default Nav
