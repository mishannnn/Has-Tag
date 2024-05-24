import React from 'react';
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import Des from '../descriptionbox/page';
import Avat from '../../../nextjs/src/components/avatar/page';
import Fcontent from '../(Globalcontents)/following/page';
import Global from '../(Globalcontents)/global/page';
import Nepal from '../(Globalcontents)/Nepal/page';

const Feed = () => {
  let tabs = [
    {
      id: "Global",
      label: "Global",
      content: <Global/>
    },
    {
      id: "Following",
      label: "Following",
      content: <Fcontent/>
    },
    {
      id: "Nepal",
      label: "Nepal",
      content: <Nepal/>
    }
  ];

  return (
    <div className="flex flex-col mt-20 w-[1100px]">
      <Tabs aria-label="Dynamic tabs" items={tabs} className='fixed ml-4'>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card className="bg-transparent text-white shadow-lg border-gray-500 border-1 ml-4 mt-10 h-screen">
              <CardBody className="overflow-auto scrollbar-hide">
                <div className='bg-transparent h-fit w-full'>
                <div className='m-6'><Avat/><Des/></div>

                <div className='flex ml-14 w-fit'>
                <img src='./image.png' className='w-5 h-5 m-1 border-1 bg-white rounded border-blue-900'></img>
                <img src='./location.png' className='w-5 h-5  bg-white rounded m-1 border-1 border-blue-900'></img>
                <img src='./happy.png' className='w-5 h-5  bg-white rounded m-1 border-2 border-blue-900'></img>
              </div>



                <div className="flex justify-end">
                  <Button className='mb-6 mr-28 w-36' color="primary" variant="shadow">Post</Button>
                </div>
                <hr/></div><br/>
                {item.content}
                
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default Feed;
