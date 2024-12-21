'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Perks = () => {
  return (
    <div>
      <div className='mt-52 px-8 text-5xl text-[#003161] font-thin font-serif'>
        Perks of being a part of <i><span className='text-[#006A67]'> Forum of Diplomacy MUN</span></i>
      </div>
      <div className='mt-6 flex flex-col lg:flex-row px-8 justify-between gap-14'>
        
        <div className='lg:w-1/2'>
          <ul className='text-2xl text-[#000B58] font-serif border-2 list-disc space-y-2 border-black shadow-xl shadow-black rounded-xl bg-[#213555] bg-opacity-30 p-4'>
            <div className='ml-3 space-y-2'>
              <li> Engage in realistic simulations of UN committees, addressing global issues. </li>
              <li> Participate in global discussions and debates. </li>
              <li> Connect with delegates from diverse backgrounds. </li>
              <li> Develop research, public speaking and negotiation skills. </li>
              <li> The Forum of Diplomacy MUN is beginner-friendly, creating a comfortable platform for first-time delegates. </li>
              <li> Certificates shall be awarded to each and every participant to honour their passion and interest. </li>
              <li> The Forum of Diplomacy MUN is beginner-friendly, creating a comfortable platform for first-time delegates. </li>
              <li> Participants will have the opportunity to volunteer/partake in varying internships. </li>
              <li> Social media recognition will be provided for winners. </li>
              <li> Merit holders will be honoured by cash prizes. </li>
            </div>
          </ul>
        </div>

        <div className='lg:w-1/2 flex justify-center'>
          <Image
            src="/perks.png"
            alt="Perks Image"
            width={500}
            height={0} // The height is automatically adjusted for responsive layout
          />
        </div>
        
      </div>
    </div>
  )
}

export default Perks;
