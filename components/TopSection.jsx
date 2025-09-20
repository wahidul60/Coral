import Container from './Container'
import Flex from './Flex'
import { Montserrat, Inter } from 'next/font/google'


const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '300'],
})

export default function TopSection() {
  return (
    
    <section className='border-b border-[#d1d1d1]'>
       <div className='w-screen bg-[#634C9F]'>
        <Container>
          <div className={`flex-col flex items-center justify-center text-[9px] py-[10px] text-white md:flex md:flex-row md:text-[12px] md:gap-[100px] ${inter.className}`}>
            <p>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
            <p>Until the end of the sale:
              <span className='font-bold text-[14px] md:text-[18px] px-1'>47</span>
              days
              <span className='font-bold text-[14px] md:text-[18px] px-1 '>06</span>
              hours
              <span className='font-bold text-[14px] md:text-[18px] px-1 '>55</span>
              minutes
              <span className='font-bold text-[14px] md:text-[18px] px-1 '>51</span>
              sec.
            </p>
          </div>
        </Container>
      </div>

      <div className={` ${inter.className} text-[12px] text-[#6B7280] bg-[#FFFFFF]`}>

        <Container>
          <div className='md:flex hidden justify-between py-3 '>
            <Flex className='gap-4 font-normal'> 
              <a href="">About Us</a>
              <a href="">My account</a>
              <a className='border-r gap-0 pr-4 border-[#cacaca]' href="">Whishlist</a>
              <a className='font-light' href="">We deliver to youyr every form <span className='font-bold text-[#EA580C]'>7:00 to 23:00</span> </a>
            </Flex>

            <Flex className='gap-4'>
              <select name="" id="">
                <option value="">English</option>
                <option value="">Bangla</option>
              </select>

              <select name="" id="">
                <option value="">USD</option>
                <option value="">BDT</option>
                <option value="">INR</option>
              </select>

              <a href="">Order Tracking</a>
            </Flex>
          </div>
        </Container>

      </div>
    </section>
  )
}
