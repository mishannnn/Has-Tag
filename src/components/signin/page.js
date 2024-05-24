import React from 'react';
import { Card, Input, Button, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

const CardComponent1 = () => {
  return (
    <Card className="w-[380px] min-h-screen mt-3 mb-0 bg-zinc-950">
      <CardHeader className="flex gap-3 items-center">
      <h1 className='text-white font-bold text-6xl'>#</h1>
        <div>
          <p className="text-2xl font-bold text-white">Signup</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Input className='m-3 w-auto' type="email" label=" Full Name" />
        <Input className='m-3 w-auto' type="Email" label="Email" />
        <Input className='m-3 w-auto' type="password" label="Password" />
        <Input className='m-3 w-auto' type="confirmpassword" label="Confirm password" />
        <Input className='m-3 w-auto' type="phone" label="Phone number" />
        <Button radius="full" className="w-auto bg-gradient-to-tr from-blue-700 to-black-500 text-white shadow-lg">
          Sign In
        </Button>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        
       <a href='/' className='text-white'> Already have an account?<span className='text-blue-800'> Log In</span> </a>
      </CardFooter>
    </Card>
  );
}

export default CardComponent1;
