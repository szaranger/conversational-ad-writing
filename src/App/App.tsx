import 'braid-design-system/reset';

import { BraidProvider, Box, Heading, Loader, Page, PageBlock, Stack, Textarea } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import { isEmpty } from 'lodash';
import { StrictMode, useState } from 'react';

import { ChatMessage } from 'src/App/components/chatMessage';
import { UserInput } from 'src/App/components/userInput';

const AD_AGENT = { id: 'ad_agent', title: 'Ad agent' };
const YOU = { id: 'you', title: 'You' };

interface Message {
  author: { id: string; title: string };
  message: string;
}

export default  () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isDraftReady, setIsDraftReady] = useState(false);
  const [lastMessage, setLastMessage] = useState('');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [messages, setMessages] = useState([{
    author: AD_AGENT,
    message: "G’day! Describe your role to us, and we will generate a draft for you!",
  }]);

  const handleChange = (input: string) => {
    setLastMessage(input);
  };

  const handleSend = async (input: string) => {
    const newMessage = {
      author: YOU,
      message: input,
    };

    setIsHidden(false);

    console.log("PROMPT", `${prompt} ${input}`)

    const res = await fetch(`/generate-prompt?prompt=${prompt} ${input}`);
    const data = await res.json();
    const { jobTitle, location, salary } = data;

    setPrompt(`${prompt} ${input}`);

    if (isEmpty(salary)) {
      setTimeout(() => { 
        setMessages([...messages, newMessage, { author: AD_AGENT, message: "Sure. What kind of salary are you willing to offer?" }]);
        setIsHidden(true); 
      }, 2000);

      return;
    }

    if(!isEmpty(salary)) {
      const draft = await fetch(`/generate-draft?jobTitle=${jobTitle}&location=${location}&salary=${salary}`);
      const draftText = await draft.json();

      setIsDraftReady(true);
      setIsHidden(true);
      setResult(draftText);

      setTimeout(() => { 
        setMessages([...messages, newMessage]);
        setIsHidden(true); 
      }, 2000);

      return
    }


    setTimeout(() => { 
      setMessages([...messages, newMessage]);
      setIsHidden(true); 
    }, 2000);
  };

  return (
    <StrictMode>
      <BraidProvider theme={apac}>
        <Page footer={<></>}>
          <PageBlock>
            <Stack space="medium">
              <Box marginTop="medium">
                <Heading level="1">Conversational Ad Writing</Heading>
              </Box>
              <Stack space="medium">
                {messages.map((message: Message, index: number) =>
                  <ChatMessage
                    author={message.author.title}
                    message={message.message}
                    alignment={message.author.id === 'ad_agent' ? 'left' : 'right'}
                    key={index}
                  />)}
                  {!isHidden && <ChatMessage
                    author={YOU.title}
                    message={lastMessage}
                    alignment="right"
                  />}
                  {!isHidden && <Loader />}
              </Stack>
            </Stack>
            {isDraftReady ? 
            <Box marginTop="medium">
              <Stack space="medium">
                <Heading level="2">Draft</Heading>
                <Textarea
                  id="draftTextarea"
                  label="🎉"
                  lines={25}
                  value={result as string}
                />
              </Stack>
            </Box> : <UserInput onChange={handleChange} onSend={handleSend} />}
          </PageBlock>
        </Page>
      </BraidProvider>
    </StrictMode>
  );
};
