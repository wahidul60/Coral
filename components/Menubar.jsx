'use client'
import React from 'react'
import Container from './Container'
import { TbCategory } from "react-icons/tb";
import Flex from './Flex';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})


export default function Menubar() {
  return (
    <section>
      <Container>
        <Flex className='gap-8'>
          <div className='cursor-pointer w-1/5 border border-[#E5E7EB] rounded'>
            <Flex className='justify-center items-center gap-4 p-[14px] '>
              <TbCategory />
              <a className='pr-[100px] ' href="#">Category</a>
              <MdOutlineKeyboardArrowDown />
            </Flex>
          </div>

          <Flex className='justify-between items-center w-4/5'>
            <div className={`${inter.className} text-black font-semibold `}>
              <Flex className='gap-10 text-[15px]'>
                <div className='flex gap-1 items-center justify-center hover:text-[#634C9F]'>
                  <a href=""> Home </a> <MdOutlineKeyboardArrowDown />
                </div>
                <div className='flex gap-1 items-center justify-center hover:text-[#634C9F]'>
                  <a href=""> Shop </a> <MdOutlineKeyboardArrowDown />
                </div>
                <a className='hover:text-[#634C9F]' href="">Fruits & Vegetables</a>
                <a className='hover:text-[#634C9F]' href="">Beverages</a>
                <a className='hover:text-[#634C9F]' href="">Blog</a>
                <a className='hover:text-[#634C9F]' href="">Contact</a>
              </Flex>
            </div>

            <Flex className={`text-[15px] ${inter.className} gap-6`}>
              <div className='flex gap-1 items-center justify-center hover:text-[#634C9F]'>
                <a href=""> Trending Products </a> <MdOutlineKeyboardArrowDown />
              </div>

              <div className='flex gap-1 items-center justify-center text-[#DC2626] hover:text-[#634C9F]'>
                <a href=""> Almost Finished </a>
                <MdOutlineKeyboardArrowDown />
                <div className='w-[37px] h-[20px] bg-linear-to-r from-red-500 to-red-700 rounded flex justify-center items-center text-white'>sale</div>
              </div>
            </Flex>
          </Flex>

        </Flex>
      </Container>
    </section>
  )
}
