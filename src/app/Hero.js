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
                <p className="text-center text-white text-lg my-20">By clicking "Continue" you agree to AInytime’s <span style={{ color: "#B7007F" }} className='text-lg'>Privacy Notice.</span></p>
                <div className='z-0 justify-center mx-auto mt-2 lg:w-9/12 lg:h-auto rounded p-4 border-2 border-black bg-white'>
                    <div className="flex justify-start items-center w-full h-auto ml-10 mb-24 space-x-2">
                        <img src="/images/plus-circle.png" alt="hero" className="w-7 h-7" />
                        <h6 className="text-black text-lg p-2">Add new project</h6>
                    </div>
                    <div className='z-0 justify-start mx-auto mt-2 lg:w-9/12 lg:h-auto rounded-2xl p-4 border-t border-b border-l border-r border-gray-400 bg-white'>
                        <h1 className="text-2xl ml-2 text-start font-semibold z-10 text-black">Select your post for</h1>
                        <div className='w-full h-px bg-gray-300 my-2'></div>
                        <div className="flex justify-start items-center w-full h-auto ml-2 mt-3 py-6 space-x-2">
                            <img src="/images/Social media links.svg" alt="hero" className="w-10 h-10 items-center" />
                            <img src="/images/Social media links (1).svg" alt="hero" className="w-10 h-10 items-center" />
                            <img src="/images/Social media links (2).svg" alt="hero" className="w-10 h-10 items-center" />
                            <img src="/images/Social media links (3).svg" alt="hero" className="w-10 h-10 items-center" />
                        </div>
                    </div>
                    <div className='z-0 justify-start mx-auto lg:w-9/12 lg:h-auto rounded-2xl p-4 border-t border-b border-l border-r border-gray-400 bg-white'>
                        <h1 className="text-2xl ml-2 text-start font-semibold z-10 text-black">Select your post dimensions</h1>
                        <div className='w-full h-px bg-gray-300 my-2'></div>
                        <div className="flex justify-center xl:justify-evenly items-center w-full h-auto ml-2 mt-3 py-6 space-x-2">
                            <img src="/images/Group 21681.png" alt="hero" className="w-auto h-14" />
                            <img src="/images/Group 21682.png" alt="hero" className="w-auto h-14" />
                            <img src="/images/Group 21683.png" alt="hero" className="w-auto h-14" />
                            <img src="/images/Group 21684.png" alt="hero" className="w-auto h-14" />
                            <img src="/images/Group 21685.png" alt="hero" className="w-auto h-14" />
                            <img src="/images/Group 21675.png" alt="hero" className="w-auto h-14" />
                            <img src="/images/Group 21676.png" alt="hero" className="w-auto h-14" />
                            <img src="/images/Group 21677.png" alt="hero" className="w-auto h-14" />
                            <img src="/images/Group 21679.png" alt="hero" className="w-auto h-14" />
                            <img src="/images/Group 21680.png" alt="hero" className="w-auto h-14" />
                            {/* <img src="/images/Group 21697.png" alt="hero" className="w-auto h-auto" /> */}
                        </div>
                    </div>
                    <div className='z-0 justify-start mx-auto lg:w-9/12 lg:h-auto rounded-2xl p-4 border-t border-b border-l border-r border-gray-400 bg-white'>
                        <h1 className="text-2xl ml-2 text-start font-semibold z-10 text-black">Select your industry</h1>
                        <div className='w-full h-px bg-gray-300 my-2'></div>
                        <div className="grid grid-cols-5 space-x-5 items-center h-auto mt-3 px-5">
                            <div className='justify-center'>
                                <img src="/images/industry/Group 21649.png" alt="hero" className="w-auto h-14" />
                                <img src="/images/industry/Group 21672.png" alt="hero" className="w-auto h-14" />
                            </div>
                            <div className='justify-center'>
                                <img src="/images/industry/Group 21671.png" alt="hero" className="w-auto h-14" />
                                <img src="/images/industry/Group 21669.png" alt="hero" className="w-auto h-14" />
                            </div>
                            <div className='justify-center'>
                                <img src="/images/industry/Group 21666.png" alt="hero" className="w-auto h-14" />
                                <img src="/images/industry/Group 21674.png" alt="hero" className="w-auto h-14" />
                            </div>
                            <div className='justify-center'>
                                <img src="/images/industry/Group 21673.png" alt="hero" className="w-auto h-14" />
                                <img src="/images/industry/Group 21692.png" alt="hero" className="w-auto h-14" />
                            </div>
                            <div className='justify-center'>
                                <img src="/images/industry/Group 21668.png" alt="hero" className="w-auto h-14" />
                                <img src="/images/industry/Group 21688.png" alt="hero" className="w-auto h-14" />
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center mx-auto w-full'>
                        <button className="bg-[#1f0132] text-white px-5 py-2 mt-8 rounded-xl mx-auto justify-center">Move to Content Creation</button>
                    </div>
                </div>
            </div>
        </>
    );
}
