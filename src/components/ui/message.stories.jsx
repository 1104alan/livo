import { MessageGroup, Message, MessageAvatar, MessageContent } from './message';
import { Bubble, BubbleContent } from './bubble';
import { Avatar, AvatarFallback } from './avatar';

export default {
  title: 'UI/Message',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <MessageGroup style={{ width: 340 }}>
    <Message align="start">
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>IA</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble align="start">
          <BubbleContent>Hola, ¿en qué te puedo ayudar hoy?</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <Bubble align="end">
          <BubbleContent>Necesito revisar el diseño de la app.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  </MessageGroup>
);
