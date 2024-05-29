import { Stack, Text } from 'braid-design-system';

interface props {
  author: string;
  message: string;
  alignment: 'left' | 'right';
}

export const ChatMessage = ({ author, message, alignment }: props) => (
  <Stack space="xsmall">
    <Text align={alignment} weight="strong">
      {author}
    </Text>
    <Text align={alignment}>{message}</Text>
  </Stack>
);
