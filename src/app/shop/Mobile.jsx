"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import Link from 'next/link'

export default function Mobile() {
        const [open, setOpen] = useState(false)

        function handleNav() {
            setOpen(!open)
        }
    return (
        <div className='md:hidden'>
            <ul className='flex flex-row justify-evenly items-center'>
                <li><Link href={'/'}>Home</Link></li>
                <li><GiHamburgerMenu/></li>
            </ul>

            <ul className='flex flex-col justify-between items-center bg-blue-700 text-white h-screen from-bold capitalize px-4'>
                <Link href="/">
                <li>home</li>
                </Link>
                
                <Link href="/">
                <li></li>
                </Link>

                <Link href="/shop">
                <li>shop</li>
                </Link>

                <Link href="/about">
                <li>about</li>
                </Link>

                <Link href="/contact">
                <li>contact</li>
                </Link>

                <Link href="/sign-up">
                <li>sign-up</li>
                </Link>

                <Link href="/dashboard">
                <li>dashboard</li>
                </Link>
                
            </ul>
        </div>
    )
}