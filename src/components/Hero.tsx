import React from 'react'

const Hero = () => {
  return (
    <div className='h-[600px] bg-blue-50 flex flex-col items-center'>
      <h2 className='text-center font-bold text-4xl text-cust-blue mt-12 w-[1133px] h-[120px]'>
        Your Startup's legal partner. Simplified, transparent,<br />
        automated. <span className='text-orange-500'>From Start to Scale</span>
      </h2>
      <h1 className='text-center  text-cust-blue text-[18px] font-poppins font-normal -mt-'>
        The only end-to-end platform offering integrated legal solution that combines human<br />
        intelligence and technology to automate all your legal and taxation complexities and provides<br />
        you with a peace of mind and focus on your startup.
      </h1>
      <button className='bg-custom-blue text-white mt-14  h-[52px] w-[166px] p-2 rounded-md text-[18px]'>
        Book a demo
      </button>
      <h3 className='text-center mt-14 text-2xl font-bold'>
      <span className="px-4 text-gray-600">TRUSTED BY STARTUPS <span className='text-orange-500'> LIKE YOURS</span>
      </span>
      </h3>
 
      <div className='flex space-x-8 mt-8 justify-center w-[500px]'>
        <img src='/hero/pwc.svg' alt='Image 1' className='h-10 w-auto m-3' />
        <img src='/hero/Zerodha 1.svg' alt='Image 2' className='h-10 w-auto' />
        <img src='/hero/boat.svg' alt='Image 3' className='h-10 w-auto' />
        <img src='/hero/phonepe.svg' alt='Image 4' className='h-10 w-auto' />
        <img src='/hero/rapido.svg' alt='Image 5' className='h-10 w-auto' />
        <img src='/hero/lenskart.svg' alt='Image 6' className='h-10 w-auto' />
      </div>
    </div>
  )
}

export default Hero
