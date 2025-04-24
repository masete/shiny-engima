import BarTopVendors from '@/components/Products/BarTopVendors'
import { Selection } from '@/components/Products/Selection'
import Link from 'next/link'
import React from 'react'

const TopVendors = () => {
  return (
    <div>
        <Selection/>
        <div className='mx-10 mt-10'>
           <BarTopVendors title='Top 20 Rated Vendors' showChevron={false} showAllText='' /> 
        </div>
        
            <div className='mx-10'>
                <Link href='/topVendors/mystore'>
                <div className='flex flex-row items-center justify-center space-x-12 border my-1 py-2 h-[200px]'>
                    <div className='py-12 items-center justify-center'>
                        <img src='/coursel/people3.jpg' alt='image' className='rounded-full' width={100} height={100}/>
                        <h6 className='font-semibold text-sm'>Brian K</h6>
                        <p className='text-sm'>Barber shop</p>
                    </div>
                    <div>
                        <img src='/coursel/profilepic1.jpg' alt='image' className='rounded-full' width={100} height={50}/>
                        <h6>Brian K</h6>
                        <p>Barber shop</p>
                    </div>
                    <div>
                        <img src='/coursel/profilepic1.jpg' alt='image' className='rounded-full' width={100} height={50}/>
                        <h6>Brian K</h6>
                        <p>Barber shop</p>
                    </div>
                    <div>
                        <img src='/coursel/profilepic1.jpg' alt='image' className='rounded-full' width={100} height={50}/>
                        <h6>Brian K</h6>
                        <p>Barber shop</p>
                    </div>
                    <div>
                        <img src='/coursel/profilepic1.jpg' alt='image' className='rounded-full' width={100} height={50}/>
                        <h6>Brian K</h6>
                        <p>Barber shop</p>
                    </div>
                    
                </div>
                </Link>
                

                <div className='flex flex-row items-center justify-center space-x-12 border shadow-xl my-2 py-2 h-[200px]'>
                    <div className='py-12 items-center justify-center'>
                        <img src='/coursel/people3.jpg' alt='image' className='rounded-full' width={100} height={100}/>
                        <h6 className='font-semibold text-sm'>Brian K</h6>
                        <p className='text-sm'>Barber shop</p>
                    </div>
                    <div>
                        <img src='/coursel/profilepic1.jpg' alt='image' className='rounded-full' width={100} height={50}/>
                        <h6>Brian K</h6>
                        <p>Barber shop</p>
                    </div>
                    <div>
                        <img src='/coursel/profilepic1.jpg' alt='image' className='rounded-full' width={100} height={50}/>
                        <h6>Brian K</h6>
                        <p>Barber shop</p>
                    </div>
                    <div>
                        <img src='/coursel/profilepic1.jpg' alt='image' className='rounded-full' width={100} height={50}/>
                        <h6>Brian K</h6>
                        <p>Barber shop</p>
                    </div>
                    <div>
                        <img src='/coursel/profilepic1.jpg' alt='image' className='rounded-full' width={100} height={50}/>
                        <h6>Brian K</h6>
                        <p>Barber shop</p>
                    </div>
                    
                </div>
        </div>
    </div>
  )
}

export default TopVendors