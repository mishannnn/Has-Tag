import React from 'react';
import { Image } from '@nextui-org/react';
import NavBar from '@/components/navbar/page';
import CardComponent1 from '@/components/signin/page';

export default function reg() {
  return (
    <>
    <div className='bg-black min-h-screen'>
        <NavBar />
        
        <div className='flex justify-center space-x-72 mt-0 mb-0  border-white min-h-screen w-full'>
          <Image
            isBlurred
            isZoomed
            width={300}
            height={180}
            src="sign.png"
            alt="NextUI Album Cover"
            className="mt-32 bg-white"
          />
            <CardComponent1/>
          </div>
      </div>
    </>
  );
}
