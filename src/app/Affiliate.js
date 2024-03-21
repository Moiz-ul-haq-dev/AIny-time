import React from 'react'

export default function Affiliate() {
  return (
    <>
      <div className="relative h-auto">
        <div className="bg-[#a22fcf] absolute top-28 left-60 -z-10 rounded-full shadow-lg opacity-60" style={{ transform: "translateX(25%) rotate(-45deg)", width: '700px', height: '700px', filter: 'blur(175px)' }}>
        </div>
        <h1 className='text-center text-white text-4xl my-8'>Affiliate Marketing</h1>
        <div className='grid grid-rows-3 px-64 mb-20'>
          <h1 className='text-3xl text-white font-semibold'>How does it work?</h1>
          <p className='text-lg text-white'>Sign up to our program and start earning money by bringing
            users to AInytime via your link.</p>
          <button className='bg-[#B7007F] w-44 py-3 px-4 rounded-lg text-white'>Become a partner</button>
        </div>
        <div className='grid md:grid-cols-2 justify-center py-2 rounded-t-2xl my-16 gap-10 px-48'>
          <div className='flex flex-col justify-center mx-auto w-full bg-[#7F678C] px-8 py-14 rounded-2xl h-auto relative'>
            <div className='absolute -top-5 shadow-md shadow-[#b7007f] bg-white w-16 h-14 items-center rounded-2xl'>
              <h1 className='text-2xl font-bold text-black text-center pt-3'>01</h1>
            </div>
            <h1 className='text-2xl font-bold mb-6  text-white'>Customize</h1>
            <p className='text-lg text-white'>Your visitor browses our website and may decide to sign up.</p>
            <div className='bg-white rounded-lg py-3 my-3'>
              <input type="text" placeholder='https://ainytime.ai?via=123vx2ds235' className='px-3 w-full'/>
            </div>
          </div>
          <div className='flex flex-col justify-center mx-auto w-full bg-[#7F678C] px-8 py-14 rounded-2xl h-auto relative'>
          <div className='absolute -top-5 shadow-md shadow-[#b7007f] bg-white w-16 h-14 items-center rounded-2xl'>
              <h1 className='text-2xl font-bold text-black text-center pt-3'>02</h1>
            </div>
            <h1 className='text-2xl font-bold mb-6 text-white'>Tracking System</h1>
            <p className='text-lg text-white'>Your visitor browses our website and may decide to sign up.</p>
            <div className='bg-white rounded-lg py-3 my-3 flex items-center'>
              <img src='/images/tick mark.png' className='w-4 h-4 ml-2' />
              <input type="text" placeholder='https://adcreative.ai?via=123vx2ds235' className='px-3 w-full'/>
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 justify-center py-2 rounded-t-2xl my-16 gap-10 px-48'>
        <div className='flex flex-col justify-center mx-auto w-full bg-[#7F678C] px-8 py-14 rounded-2xl h-auto relative'>
          <div className='absolute -top-5 shadow-md shadow-[#b7007f] bg-white w-16 h-14 items-center rounded-2xl'>
              <h1 className='text-2xl font-bold text-black text-center pt-3'>03</h1>
            </div>
            <h1 className='text-2xl font-bold mb-6 text-white'>Completed Registration</h1>
            <p className='text-lg text-white'>Your visitor browses our website and may decide to sign up.</p>
            <div className='bg-white rounded-lg py-3 my-3 flex items-center'>
              <img src='/images/SVG (3).png' className='w-4 h-4 ml-2' />
              <div className='flex items-center justify-between w-full'>
                <h1 className='text-sm'>Your Customer</h1>
                <div className='flex items-center space-x-3 mr-2'>
                  <h1 className='text-sm'>Registration Successful</h1>
                  <img src='/images/tick mark.png' className='w-4 h-4'/>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center mx-auto w-full bg-[#7F678C] px-8 py-14 rounded-2xl h-auto relative'>
          <div className='absolute -top-5 shadow-md shadow-[#b7007f] bg-white w-16 h-14 items-center rounded-2xl'>
              <h1 className='text-2xl font-bold text-black text-center pt-3'>04</h1>
            </div>
            <h1 className='text-2xl font-bold mb-6 text-white'>30% of the income is yours!</h1>
            <p className='text-lg text-white'>Your visitor browses our website and may decide to sign up.</p>
            <div className='bg-white rounded-lg py-3 my-3 flex items-center'>
              <img src='/images/SVG (2).png' className='w-4 h-4 ml-2' />
              <input type="text" placeholder='Money being transfered to your account' className='px-3 w-full'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
