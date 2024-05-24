"use client"
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Dropdown from '../dropdown/page';
import Input from '@/components/searchbar/page'



const NavBarAF = () => {
  return (
    
    <Navbar className=' w-full mt-0 flex justify-between bg-black border-b border-gray-500 mb-0'>
      <NavbarBrand>
      <a href='/'>
      <h1 className='text-3xl font-bold text-white shadow-black font-serif'>Has Tag</h1>
             </a>
      </NavbarBrand>
      <NavbarContent justify="end" className='relative left-[520px]'>
        <div className='flex m-8'>
        <Input/>
        <Dropdown/>
        </div>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBarAF