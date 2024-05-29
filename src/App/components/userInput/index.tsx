/* eslint-disable no-console */
import { Box, Button, Textarea } from 'braid-design-system';
import { type ChangeEvent, useState } from 'react';

export const UserInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleOnSend = () => {
    console.log('InputValue', inputValue);
    // send to end point

    // response add to chat messages
    // OR
    // take response and feed into JDV
  };

  return (
    <Box display="flex">
      <Box width="full">
        <Textarea
          id="qwer"
          label=""
          onChange={handleOnChange}
          placeholder="Enter your text here..."
          value={inputValue}
        />
      </Box>
      <Box onClick={handleOnSend} display="flex">
        <Button onClick={handleOnSend}>Send</Button>
      </Box>
    </Box>
  );
};
