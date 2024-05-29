/* eslint-disable no-console */
import { Box, Button, Textarea } from 'braid-design-system';
import { type ChangeEvent, useState } from 'react';

export const UserInput = ({
  callback,
}: {
  callback: (message: string) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleOnSend = () => {
    console.log('InputValue', inputValue);
    // send to end point

    callback('asdf');
    // --first message sent
    // "I'm looking for a boiler mechanic that can work for me at least 4 days a week, with at least 5 years experience and a Queensland license"
    // -- response
    // failure - missing salary

    // render returned message

    // --second message sent
    // "100 an hour"

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
