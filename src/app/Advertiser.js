import React from 'react';

export default function Advertiser() {
    return (
        <>
            <div className=''>
                <h1 className='text-center text-white text-4xl mb-8 mt-16'>Generative AI for Advertiser</h1>
                <img src='/images/again.png' className='w-full h-auto'  />
                <div className='bg-[#1f0132] w-full h-32 z-0' style={{filter: "blur(100px)", transform: "translateY(-50%)" }}></div>
                {/* <div className='bg-[#1f0132] w-full h-52 absolute z-20' style={{ transform: "translateY(-100%)" }}></div> */}
            </div>
            <div className='mb-20 pt-6 px-36'>
                <h1 className='text-white text-5xl my-2'>See the AInytime.ai platform</h1>
                <h1 className='text-white text-5xl my-2'>in action</h1>
                <p className='text-white text-lg my-2 max-w-3xl'>Get a demo and discover how sales and marketing teams use Anytime.ai to add an AI superpower to their revenue engine.</p>
                <button className='bg-[#B7007F] text-white rounded-xl px-10 py-3 my-5'>Get Started</button>
            </div>
        </>
    );
}
