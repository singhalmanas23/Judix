import React from 'react'

const Hero = () => {
  return (
    <div className='h-[600px] bg-blue-50 flex flex-col items-center'>
      <h2 className='text-center font-bold text-3xl text-blue-950 mt-12'>
        Your Startup's legal partner. Simplified, transparent,<br />
        automated. <span className='text-orange-500'>From Start to Scale</span>
      </h2>
      <h1 className='text-center mt-16'>
        The only end-to-end platform offering integrated legal solution that combines human<br />
        intelligence and technology to automate all your legal and taxation complexities and provides<br />
        you with a peace of mind and focus on your startup.
      </h1>
      <button className='bg-blue-600 text-white mt-14 w-36 h-16 rounded-md'>
        Book a demo
      </button>
      <h3 className='text-center mt-14 text-2xl font-bold'>TRUSTED BY STARTUPS <span className='text-orange-500'>LIKE YOURS</span></h3>
      <div className='flex space-x-8 mt-8 justify-center'>
        <img src='/pwc.jpeg' alt='Image 1' className='h-16 w-auto' />
        <img src='/zerodha.png' alt='Image 2' className='h-16 w-auto' />
        <img src='/boat.png' alt='Image 3' className='h-16 w-auto' />
        <img src='/phonepe.png' alt='Image 4' className='h-16 w-auto' />
        <img src='/rapido.svg' alt='Image 5' className='h-16 w-auto' />
        <img src='/Lenskart-Logo.png' alt='Image 6' className='h-16 w-auto' />
      </div>
    </div>
  )
}

export default Hero
