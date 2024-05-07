"use client"
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Dropdown from '../dropdown/page';

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit text-3xl italic font-serif" >Has a Tag?</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Dropdown/>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar