import React from 'react';
import { Card, Input, Button, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

const CardComponent1 = () => {
  return (
    <Card className="w-[380px] h-fit mt-6 bg-zinc-900 mb-4 p-6 rounded-lg shadow-lg">
      <CardHeader className="flex gap-3 items-center">
        <h1 className="text-white font-bold text-6xl">#</h1>
        <div>
          <p className="text-2xl font-bold text-white">Signup</p>
        </div>
      </CardHeader>
      <Divider className="bg-gray-600 my-4" />
      <CardBody className="space-y-4">
        <Input className="w-full" type="text" label="Full Name" />
        <Input className="w-full" type="email" label="Email" />
        <Input className="w-full" type="password" label="Password" />
        <Input className="w-full" type="password" label="Confirm Password" />
        <Input className="w-full" type="tel" label="Phone Number" />
        <Button className="w-full bg-gradient-to-tr from-blue-700 to-blue-900 text-white shadow-lg">
          Sign In
        </Button>
      </CardBody>
      <Divider className="bg-gray-600 my-4" />
      <CardFooter className="flex justify-center">
        <a href="/" className="text-white">Already have an account? <span className="text-blue-500">Log In</span></a>
      </CardFooter>
    </Card>
  );
}

export default CardComponent1;
