import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/NavBar'
import { ArrowBack } from '@mui/icons-material'
import React from 'react'

const page = () => {
  return (
    <section>
        {/* <Navbar/> */}
        <div className='bg-blue-900 h-35 object-contain sticky top-5 z-40'>
            <div className='flex flex-row p-10'>
                <ArrowBack className='text-white font-bold text-3xl'/>
                <p className='text-white font-bold text-2xl'>Podcasts</p>
            </div>
        </div>
        <div className='p-3'>
                <p className='text-gray-500 text-xl font-bold'>Most Popular Article Of The Month</p>
        </div>
        <Hero backgroundImage={''} showButton={false} children={undefined}/>
      
    </section>
  )
}

export default page
