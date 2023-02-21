import React from 'react'
import muddy from '../assets/muddy-nft.png'

const Hero = () => {
  return (
    <div className='bg-momo-green text-center h-96'>
        <div className='mt-20 p-6'>
            <h1 className='text-white font-bold text-4xl inline-block'>Public Mint Live</h1>
            <div className='absolute invisible md:visible lg:bottom-12 lg:mb-12 lg:right-12 lg:p-12 md:right-7 md:bottom-12 md:p-10'><img src={muddy} height={450} width={450}/></div>
        </div>
        <div className='p-6'>
            <button className='bg-gradient-to-r from-purple-500 to-yellow-600 text-white font-bold rounded-full h-16 p-3 cursor-pointer'>Connect Wallet</button>
        </div>
    </div>
  )
}

export default Hero