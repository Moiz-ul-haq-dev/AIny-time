import Image from 'next/image';
import React from 'react';

export default function Hero() {
    return (
        <>
            <div className="mt-2 items-center p-3 rounded-lg relative">
                <Image src="/images/Component 8.png" alt="hero" width={100} height={100} className="absolute z-10 top-24 right-0" />
                <Image src="/images/Component 17.png" alt="hero" width={100} height={100} className="absolute z-10 top-[50%] left-0" />
                <h2 className="text-5xl font-semibold z-10 text-center text-white">Run & scale your</h2>
                <h2 className="flex text-5xl font-semibold z-10 text-center justify-center text-white">go-to-market — <span style={{ color: "#B7007F" }} className='ml-2'>with AI</span></h2>
                <p className="text-center text-white text-lg px-72 py-3 mt-2">Create content, enrich your CRM, scale your prospecting efforts, and much more. Our AI platform is designed for your entire GTM team. Install our powerful, pre-built workflows — or build your own in seconds.</p>
                <div className="flex justify-center w-full mt-5 z-10">
                    <p className="text-black text-lg bg-white py-0 pl-10 justify-between rounded-lg">Enter your email? <button className="ml-36 mr-2 my-2 text-white border-white border-r-4 border-t-4 border-b-4 font-semibold px-10 py-5 rounded-lg" style={{backgroundColor : "#B7007F"}}>Continue</button></p>  
                </div>
                <p className="text-center text-white text-lg mt-20">By clicking "Continue" you agree to AInytime’s <span style={{ color: "#B7007F" }} className='text-lg'>Privacy Notice.</span></p>
                <Image src="/images/Group 21697.png" alt="hero" width={1200} height={700} className="z-0 justify-center flex mx-auto mt-2" />
            </div>
        </>
    );
}
