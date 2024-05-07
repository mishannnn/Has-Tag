import React from 'react';
import { Card, Input, Button, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

const CardComponent = () => {
  return (
    <Card className="w-[450px] h-auto">
      <CardHeader className="flex gap-3 items-center">
        <Image
          alt="nextui logo"
          height={50}
          radius="sm"
          src="hastag.png"
          width={50}
        />
        <div>
          <p className="text-2xl font-bold">LOGIN</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Input className='m-3 w-auto' type="email" label="Email" />
        <Input className='m-3 w-auto' type="password" label="Password" />
        <Button radius="full" className="w-auto bg-gradient-to-tr from-blue-600 to-black-500 text-white shadow-lg">
          Login
        </Button>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        
       <a href=''> Don't have an account? Sign up </a>
      </CardFooter>
    </Card>
  );
}

export default CardComponent;
