import { Avatar, AvatarImage, AvatarFallback } from './avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="Usuario" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export const ConFallback = () => (
  <Avatar>
    <AvatarImage src="/no-existe.png" alt="Usuario" />
    <AvatarFallback>AT</AvatarFallback>
  </Avatar>
);

export const Tamaños = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Avatar size="sm">
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
    <Avatar size="default">
      <AvatarFallback>MD</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  </div>
);
