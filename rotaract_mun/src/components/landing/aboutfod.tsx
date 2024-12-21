'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div>
         <div className='mt-52 px-8 text-5xl text-[#003161] font-thin font-serif flex justify-center'>
        What is <i><span className='text-[#006A67]'> Forum of Diplomacy? </span></i>
      </div>
      <div className='mt-6 flex  lg:flex-row px-8 '>
        
        <div className=''>
        <div className=' flex justify-center ml-12'>
          <Image
            src="/about_rc.png"
            alt="Perks Image"
            width={400}
            height={300} // The height is automatically adjusted for responsive layout
          />
          
        </div>
     
          
        </div>
        <div className='text-xl text-[#000B58] font-serif mt-4 text-justify space-y-2 border-black  shadow-black rounded-xl  p-4 h-[500px] w-[900px]'>

        
        The Forum of Diplomacy, is an enthralling platform where passionate individuals will be taking up the mantle as delegates in the spirited world of diplomacy. Participants will get the chance to engage in discussions, negotiate and orate their views and opinions to find mutually beneficial solutions to the various causes that are prevalent in the modern times.



<div className=' mt-4 text-2xl text-[#003161] font-thin font-serif'>All about <span className='text-[#006A67] font-semibold'><u> FOD Model United Nations</u></span></div>
<div className='text-xl text-[#000B58] font-serif  text-justify space-y-2 border-black mr-12 shadow-black rounded-xl  h-[500px] w-[870px]'>


Model United Nations (MUN) fosters engaging debates on global issues, honing skills in diplomacy, research, and public speaking. Committees like UNGA DISEC, UNHRC, Lok Sabha, and International Press provide a platform for delegates to craft resolutions and tackle pressing challenges. Participants gain insights from expert speakers while networking and engaging in thought-provoking discussions.
</div>
        
      </div>
    </div>
    </div>
  )
}

export default About;
