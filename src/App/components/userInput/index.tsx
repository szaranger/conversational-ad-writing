/* eslint-disable no-console */
import { Box, Button, Textarea, Stack } from 'braid-design-system';
import { type ChangeEvent, useState } from 'react';

export const UserInput = ({
  onChange,
  onSend,
}: {
  onChange: (text: string) => void;
  onSend: (message: string) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setInputValue(value);
    onChange(value);
  };

  const handleSend = () => {
    onSend(inputValue);
    setInputValue('');
  }

  return (
    <Stack space="gutter">
      <Box width="full" marginTop="medium">
        <Textarea
          id="qwer"
          label=""
          onChange={handleChange}
          placeholder="Enter your text here..."
          value={inputValue}
        />
      </Box>
      <Button onClick={handleSend}>Send</Button>
    </Stack>
  );
};
