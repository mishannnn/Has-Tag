'use client'
import Buttons from '@/components/button/page';
import NavBarAF from '@/components/navbar_Af_login/page';
import Feed from '@/components/feed/page';
import React from 'react';

const home2 = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col relative">
      <NavBarAF />
      
      <div className="fixed top-0 left-0 h-screen flex">
        <div className='w-[270px] h-[450px] bg-black border-r border-gray-500 mt-[70px] ml-1 rounded-3xl text-center shadow-sm shadow-gray-500'>
          <Buttons />
          <div className="border-b border-gray-300 m-2"></div>
          <h1 className='text-white mt-1 font-bold'>Trending</h1>
        </div>

      <Feed/>
        
      <div className='bg-black border-l border-gray-500 pt-24 flex flex-col text-2xl text-white fixed top-0 right-0 h-screen w-32 object-cover'>
  <img src='./home.png' className='w-14 h-14 border-2 hover:scale-110 border-white rounded-full bg-white ml-2 mt-2 mb-7'></img>
  <img src='./notification.png' className='w-14 h-14 border-2 hover:scale-110 border-white rounded-full ml-2 bg-white mt-5 mb-7'></img>
  <img src='./chat.png' className='w-14 h-14 border-2 hover:scale-110 border-white rounded-full bg-white mt-5 ml-2 mb-7'></img>
  <img src='./profile-user.png' className='w-14 h-14 hover:scale-110 border-2 border-white rounded-full bg-white ml-2 mt-5 mb-7'></img>
  <img src='./settings.png' className='w-14 h-14 border-2 hover:scale-110 border-white rounded-full bg-white mt-5 ml-2 mb-7'></img>
</div>


      </div>
    </div>
  );
};

export default home2;
