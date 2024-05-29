import 'braid-design-system/reset';

import { Box, BraidProvider, Loader, Stack } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import { StrictMode, useState } from 'react';

import { ChatMessage } from 'src/App/components/chatMessage';
import { UserInput } from 'src/App/components/userInput';

const AD_AGENT = { id: 'ad_agent', title: 'Ad agent' };
const YOU = { id: 'you', title: 'You' };

interface Message {
  author: { id: string; title: string };
  message: string;
}

export default () => {
  const [isHidden, setIsHidden] = useState(true);
  const [messages, setMessages] = useState([{
    author: AD_AGENT,
    message: "G’day! Describe your role to us, and we will generate a draft for you!",
  }]);

  const handleSend = (input: string) => {
    const newMessage = {
      author: YOU,
      message: input,
    };

    setIsHidden(false); 
    setTimeout(() => { 
      setMessages([...messages, newMessage]);
      setIsHidden(true); 
    }, 2000);
  };

  return (
    <StrictMode>
      <BraidProvider theme={apac}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="large"
          margin="gutter"
        >
          <Stack space="medium">
            {messages.map((message: Message, index: number) =>
              <ChatMessage
                author={message.author.title}
                message={message.message}
                alignment={message.author.id === 'ad_agent' ? 'left' : 'right'}
                key={index}
              />)}
              {!isHidden && <Loader />}
          </Stack>

          <UserInput onSend={handleSend} />
        </Box>
      </BraidProvider>
    </StrictMode>
  );
};
