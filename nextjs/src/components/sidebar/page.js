import React from 'react'
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";
const items = [
    {
      key: "new",
      label: <span className='font-bold text-white text-xl'>Trending tags</span>,
    },
  
  ];

const ListB = () => {
  return (
    <ListboxWrapper>
      <Listbox className='shadow-lg bg-transparent w-56 min-h-fit rounded-2xl text-white'
        items={items}
        aria-label="Dynamic Actions"
      >
        {(item) => (
       <ListboxItem
       key={item.key}
     >
       {item.label}
     </ListboxItem>
     
      
        )}
      </Listbox>
    </ListboxWrapper>
  )
}

export default ListB