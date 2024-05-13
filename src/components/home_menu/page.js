import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";


const Hmenu = () => {
  return (
    <div className="flex w-fit flex-col ml-2 mt-2">
      <Tabs aria-label="Options" className=' bg-zinc-950'>
        <Tab key="photos" title="Photos" className='bg-zinc-950 text-white'>
        </Tab>
        <Tab key="music" title="Music" className='bg-zinc-950 text-white '>
        </Tab>
        <Tab key="videos" title="Videos" className='bg-zinc-950 text-white '>
        </Tab>
      </Tabs>
    </div>  
  )
}

export default Hmenu