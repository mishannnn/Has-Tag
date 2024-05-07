import React from 'react';
import Card from '../components/login/page'; // Adjust the import path based on the actual location of your card.js file
import Dropdown from '@/components/dropdown/page'
import { Image } from '@nextui-org/react';
import NavBar from '@/components/navbar/page';

export default function App() {
  return (
    <>
      <NavBar/>
      <div className='flex justify-center space-x-72 mt-28'>
      <Image
      isBlurred
      width={240}
      src="bg.png"
      alt="NextUI Album Cover"
      className="m-5 h-60 w-64"
    />
      <Card/>
      </div>
    </>
  );
}
