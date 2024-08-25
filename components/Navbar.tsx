import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-2 py-1 bg-black fixed w-[100dvw]'>
            <p className='text-3xl font-semibold text-white'>Wallet</p>
            <div className='flex space-x-2'>
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar