import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';
import { Button } from './button';
import { Avatar, AvatarFallback } from './avatar';

export default {
  title: 'UI/HoverCard',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="link">@livo</Button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div style={{ display: 'flex', gap: 12 }}>
        <Avatar>
          <AvatarFallback>LV</AvatarFallback>
        </Avatar>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 600 }}>@livo</h4>
          <p style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>
            Sistema de diseño construido con shadcn/ui y Tailwind.
          </p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);
