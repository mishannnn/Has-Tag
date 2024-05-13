import React from 'react';
import { Textarea } from '@nextui-org/react';

const Des = () => {
    const [value, setValue] = React.useState("");
  return (
    <div className="flex flex-col gap-2 w-full text-white ml-9">
      <Textarea
        variant="underlined"
        label={<span className="text-white">Description</span>}
        placeholder="Whats on your mind?"
        value={value}
        onValueChange={setValue}
        style={{ color: 'white' }}
        className="w-full" // Ensure the Textarea fills the width of its container
      />
    </div>
  );
};

export default Des;
