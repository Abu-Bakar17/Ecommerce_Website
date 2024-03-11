import React from 'react'
import logo from '/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Input } from "@/components/ui/input"

const Header =()=> {
  return (
    <div className="flex justify-between items-center py-6 px-8">
        <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-40"/>
        </Link>
        <ul className='flex gap-x-10'>
            <li className='text-lg'>
                <Link href={"/category/female"}>
                Female
                </Link>
                </li>
            <li className='text-lg'>
                <Link href={"/category/male"}>
                    Male
                    </Link>
                </li>
            <li className='text-lg'>
                <Link href={"/category/kids"}>
                    Kids
                    </Link>
                    </li>
            <li className='text-lg'>
                <Link href={"/products"}>
                    All Products
                    </Link>
                    </li>
            </ul>
            <div className='h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center'>
            <ShoppingCart/>
            </div>
    </div>
  )
}

export default Header;