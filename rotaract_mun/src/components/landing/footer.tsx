import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#16423C] h-auto mt-24 pt-4'>
      <div className=' mx-auto px-6'>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start'>
          <div className=' lg:mb-0'>
            <Image
              src="/footerlogo.png"
              alt="Logo"
              width={250}
              height={100}
            />
          </div>

          <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 text-[#C4DAD2]'>
            <section className='flex flex-col items-center lg:items-start'>
              <Link href="/" className='text-xl mb-2'>Home</Link>
              <Link href="/" className='text-xl mb-2'>About Us</Link>
              <Link href="/" className='text-xl mb-2'>Guidelines</Link>
              <Link href="/" className='text-xl mb-2'>Work Progress</Link>
              <Link href="/" className='text-xl mb-2'>FAQ</Link>
              <Link href="/" className='text-xl mb-2'>Login/Register</Link>
            </section>

            <section className='flex  items-center lg:items-start gap-3 mt-4 lg:mt-0'>
              <span className='text-xl'>Mobile No.: +122 358 48484</span>
              <div className='border-white border-b w-32'></div>
              <span className='text-xl'>E-mail: mineflow@gmail.com</span>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
