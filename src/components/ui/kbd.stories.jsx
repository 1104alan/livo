import { Kbd, KbdGroup } from './kbd';

export default {
  title: 'UI/Kbd',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => <Kbd>⌘</Kbd>;

export const Grupo = () => (
  <KbdGroup>
    <Kbd>⌘</Kbd>
    <Kbd>K</Kbd>
  </KbdGroup>
);
