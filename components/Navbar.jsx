'use client'
import Container from './Container'
import { Montserrat, Inter } from 'next/font/google'
import Flex from './Flex'
import Image from 'next/image';
import Logo from '../public/Logo.png'
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { RiAccountCircleLine, RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";


const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '300', '500'],
})

export default function Navbar() {
  return (
    <section className='bg-[#ffffff]'>


      <Container>
        <nav className=' py-4'>
         
          <Flex className='items-center w-full justify-between '>

            <Flex className='items-center gap-3'>
              <div>
                <Image
                  src={Logo}
                  alt='logo'
                  width={170}
                  height={38} />
              </div>

              <div className={`${inter.className} hidden md:flex gap-2 text-[11px] items-center text-[#6B7280]`}>
                <CiLocationOn className='text-[20px] font-bold' />
                <p>Deliver to <br /> <span className='font-bold'>all</span> </p>
              </div>
            </Flex>

            <div className='relative hidden md:flex flex-grow bg-[#e7e7e7] mx-4 rounded'>
              <input
                type="text" 
                placeholder='search'
                className='px-4 my-2 w-full text-[10px] text-black placeholder:text-[#898989] md:text-[14px]'
              />              
              <IoSearch className='absolute hidden md:flex text-[#898989] top-1/2 -translate-y-1/2 right-4'/>
            </div>

            <Flex className={`items-center gap-4 ${inter.className} justify-end`}>
              <RiAccountCircleLine  className='text-black text-[20px]'/>

              <a className='text-[11px] hidden md:inline' href="">
                Sign in <br /> <span className='font-bold'>Account</span>
              </a>

              <FaRegHeart className='text-black text-[20px]'/>
              <RiShoppingCartLine className='text-black text-[20px]'/>

            </Flex>
          </Flex>
        </nav>
      </Container>
    </section>
  )
}
