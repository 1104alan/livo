import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
} from './message-scroller';
import { MessageGroup, Message, MessageContent } from './message';
import { Bubble, BubbleContent } from './bubble';

export default {
  title: 'UI/MessageScroller',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const mensajes = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  align: i % 2 === 0 ? 'start' : 'end',
  text: i % 2 === 0 ? `Mensaje entrante #${i + 1}` : `Respuesta #${i + 1}`,
}));

export const Default = () => (
  <MessageScrollerProvider>
    <MessageScroller
      style={{
        height: 280,
        width: 320,
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border)',
        position: 'relative',
      }}
    >
      <MessageScrollerViewport>
        <MessageScrollerContent style={{ padding: 16 }}>
          {mensajes.map((m) => (
            <MessageScrollerItem key={m.id}>
              <MessageGroup>
                <Message align={m.align}>
                  <MessageContent>
                    <Bubble align={m.align}>
                      <BubbleContent>{m.text}</BubbleContent>
                    </Bubble>
                  </MessageContent>
                </Message>
              </MessageGroup>
            </MessageScrollerItem>
          ))}
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  </MessageScrollerProvider>
);
