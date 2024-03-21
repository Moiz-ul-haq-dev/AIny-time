import React from 'react'

export default function Benefits() {
    return (
        <>
            <div className='mx-auto my-8'>
                <h1 className='text-center text-white text-4xl my-8'>Benefits of using our Software</h1>
                <div className='grid md:grid-cols-4 py-2 rounded-t-2xl my-16 px-36'>
                    <div className='flex items-center space-x-3 mx-auto'>
                        <img src='/images/Check.png' className='w-10 h-10' />
                        <h1 className='text-2xl text-white'>Time Saving</h1>
                    </div>
                    <div className='flex items-center space-x-3 mx-auto'>
                        <img src='/images/Check.png' className='w-10 h-10' />
                        <h1 className='text-2xl text-white'>Personalised</h1>
                    </div>
                    <div className='flex items-center space-x-3 mx-auto'>
                        <img src='/images/Check.png' className='w-10 h-10' />
                        <h1 className='text-2xl text-white'>Cost Saving</h1>
                    </div>
                    <div className='flex items-center space-x-3 mx-auto'>
                        <img src='/images/Check.png' className='w-10 h-10' />
                        <h1 className='text-2xl text-white'>Multitasking</h1>
                    </div>
                </div>
                
                    <h1 className='w-full text-3xl text-white text-center my-2'>Become a partner of AInytime </h1>
                    <h1 className='w-full text-3xl font-semibold text-white text-center my-2'>and start earning awards!</h1>
                    <h1 className='w-full text-sm text-white text-center my-2'>As an AInytime ambassador, earn rewards when you bring new users to AInytime.</h1>
                    <button className='bg-[#B7007F] text-white mx-auto flex rounded-xl px-8 py-3 my-5'>Become a Partner</button>
            </div>
        </>
    )
}
