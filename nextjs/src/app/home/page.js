'use client'
import React from 'react';
import Navbar from '@/components/navbar_Af_login/page';
import ListB from '@/components/sidebar/page';
import Buttons from '@/components/button/page';
import Hmenu from '@/components/home_menu/page';
import Des from '@/components/descriptionbox/page';
import { Avatar } from '@nextui-org/react';
import {Button} from "@nextui-org/react";

const HomePage = () => {
  return (
    <>
      <div className='bg-zinc-950'>
        <Navbar />
        <div className='flex absolute mt-6 mb-2'>
          <Buttons />
          <Hmenu />
        </div>
        <div className='flex mt-20 min-w-fit min-h-fit border-transparent ml-2'>
          <ListB />
          <div className='flex w-[750px] min-h-screen bg-zinc-950 ml-4 shadow-lg border-2'>
            <div className=' w-full flex-col ml-7 mr-9 mt-5'>
              <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
              <Des />
              <div className='flex ml-9 w-fit'>
                <img src='./image.png' className='w-5 h-5 bg-slate-50 m-1 border-black border-1'></img>
                <img src='./location.png' className='w-5 h-5 bg-slate-50 m-1'></img>
                <img src='./happy.png' className='w-5 h-5 bg-slate-50 m-1'></img>
                <Button color="primary" variant="ghost" className=' ml-[430px] w-32 mt-2 text-xl'>
                Post
              </Button>/
                
              </div>
            </div>
          </div>
          <div className='bg-zinc-950 border-1 border-white p-3 text-3xl flex-col h-fit text-white w-fit ml-2 mr-2 rounded-lg'>
            <img src='./home.png' className='w-12 h-12 border-2 hover:scale-110  border-white rounded-full bg-white mt-2 mb-7'></img>
            <img src='./notification.png' className='w-12 h-12 border-2 hover:scale-110  border-white rounded-full bg-white mt-5 mb-7'></img>
            <img src='./chat.png' className='w-12 h-12 border-2 hover:scale-110  border-white rounded-full bg-white mt-5 mb-7'></img>
            <img src='./profile-user.png' className='w-12 h-12 hover:scale-110  border-2 border-white rounded-full bg-white mt-5 mb-7'></img>
            <img src='./settings.png' className='w-12 h-12 border-2 hover:scale-110  border-white rounded-full bg-white mt-5 mb-7'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
