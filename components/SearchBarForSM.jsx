'use client'
import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { RiHome9Line } from 'react-icons/ri'
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from 'react-icons/ci'


export default function SearchBarForSM() {
    return (
        <section className='bg-[#545357] md:hidden'>
            <Container>
                <Flex className='py-2 justify-center items-center  '>

                    <RiHome9Line className='text-white text-[20px]' />

                    <Flex className='relative px-5'>
                        <input type="text"
                            className=' border w-full pl-4 rounded-3xl placeholder:text-[#898989] bg-white'
                            placeholder='search'
                        />
                        <div className='absolute right-9 top-1/2 -translate-y-1/2'>
                            <CiSearch className='text-[#898989] '/>
                        </div>
                    </Flex>

                    <IoIosMenu className='text-white text-[22px]'/>

                </Flex>
            </Container>
        </section>
    )
}

