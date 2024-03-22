import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='flex mx-auto bg-black py-2 w-full items-center justify-between px-40'>
                <img src='/images/logo.png' alt='logo' className='w-auto h-10' />
                <div className='flex space-x-5'>
                    <h5 className='text-sm font-light text-white'>&copy; 2024 ainytime.ai</h5>
                    <h5 className='text-sm font-light text-white'>Privacy Notice</h5>
                    <h5 className='text-sm font-light text-white'>Terms of Services</h5>
                    <h5 className='text-sm font-light text-white'>Status</h5>
                    <img src='/images/fb.png' alt='twitter' className='w-5 h-5' />
                    <img src='/images/linkedin.png' alt='twitter' className='w-5 h-5' />
                    <img src='/images/x.png' alt='twitter' className='w-5 h-5' />
                </div>
            </div>
        </>
    )
}
