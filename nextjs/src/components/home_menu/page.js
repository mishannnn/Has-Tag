import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";


const Hmenu = () => {
  return (
    <div className="flex w-fit flex-col ml-2 mt-2">
      <Tabs aria-label="Options" className=' bg-black'>
        <Tab key="photos" title="Global" className='bg-black text-white'>
        </Tab>
        <Tab key="music" title="Nepal" className='bg-black text-white '>
        </Tab>
        <Tab key="videos" title="following" className='bg-zinc-950 text-white '>
        </Tab>
      </Tabs>
    </div>  
  )
}

export default Hmenu