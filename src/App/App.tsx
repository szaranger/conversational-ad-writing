import 'braid-design-system/reset';

import { Box, BraidProvider, Stack } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import { StrictMode } from 'react';

import { ChatMessage } from 'src/App/components/chatMessage';
import { UserInput } from 'src/App/components/userInput';

export default () => (
  <StrictMode>
    <BraidProvider theme={apac}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="large"
        margin="gutter"
      >
        <Stack space="medium">
          <ChatMessage
            author="Ad agent"
            message="G’day! Describe your role to us, and we will generate a draft for you!"
            alignment="left"
          />
          <ChatMessage
            author="You"
            message="I’m looking for a boiler mechanic that can work for me at least
              4 days a week, with at least 5 years experience and a Queensland
              license"
            alignment="right"
          />
          <ChatMessage
            author="Ad agent"
            message="Sure. What kind of salary are you willing to offer?"
            alignment="left"
          />
        </Stack>

        <UserInput />
      </Box>
    </BraidProvider>
  </StrictMode>
);
