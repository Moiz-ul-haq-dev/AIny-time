import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="flex mx-52 items-center justify-between p-6">
                <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
                <div className="flex items-center space-x-1">
                    <Image className='mr-3' src="/images/Group 4.png" alt="Phone" width={50} height={50} />
                    <button className="flex items-center text-white px-3 py-2 rounded bg-transparent">
                        Login
                    </button>
                    <button className="flex items-center text-white px-3 py-2 rounded" style={{ backgroundColor: "#B7007F" }}>
                        Get Started
                    </button>
                </div>
            </nav>
        </>
    )
}
