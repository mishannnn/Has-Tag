import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const Hmenu = () => {
  return (
    <div className="flex w-fit flex-col ml-2 mt-2 ">
      <Tabs aria-label="Options" className=' bg-zinc-950'>
        <Tab key="photos" title="Global" className='bg-blue-600 text-white'>
        </Tab>
        <Tab key="music" title="Nepal" className='bg-blue-600 text-white '>
        </Tab>
        <Tab key="videos" title="following" className='bg-blue-600 text-black '>
        </Tab>
      </Tabs>
    </div>  
  )
}

export default Hmenu