import React from 'react';

export default function Hero() {
    return (
        <>
            <div className="mt-2 items-center p-3 rounded-lg relative">
                <img src="/images/Component 8.png" alt="hero" className="absolute z-10 top-24 right-0 lg:w-24 lg:h-auto" />
                <img src="/images/Component 17.png" alt="hero" className="absolute z-10 top-[50%] left-0 lg:w-24 lg:h-auto" />
                <h2 className="text-5xl font-semibold z-10 text-center text-white">Run & scale your</h2>
                <h2 className="flex text-5xl font-semibold z-10 text-center justify-center text-white">go-to-market — <span style={{ color: "#B7007F" }} className='ml-2'>with AI</span></h2>
                <p className="text-center text-white text-lg px-72 py-3 mt-2">Create content, enrich your CRM, scale your prospecting efforts, and much more. Our AI platform is designed for your entire GTM team. Install our powerful, pre-built workflows — or build your own in seconds.</p>
                <div className="flex justify-center w-full mt-5 z-10">
                    <p className="text-black text-lg bg-white py-0 justify-between rounded-lg"><input type="email" placeholder="Enter your email" className="w-72 my-4 mx-4 h-12" /><button className="bg-[#B7007F] text-white w-36 h-16 rounded-lg mx-2">Continue</button></p>
                </div>
                <p className="text-center text-white text-lg mt-20">By clicking "Continue" you agree to AInytime’s <span style={{ color: "#B7007F" }} className='text-lg'>Privacy Notice.</span></p>
                <img src="/images/Group 21697.png" alt="hero" className="z-0 justify-center flex mx-auto mt-2 lg:w-9/12 lg:h-auto" />
            </div>
        </>
    );
}
