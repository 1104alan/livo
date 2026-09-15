import { ButtonGroup, ButtonGroupText } from './button-group';
import { Button } from './button';
import { Bold, Italic, Underline } from 'lucide-react';

export default {
  title: 'UI/ButtonGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <ButtonGroup>
    <Button variant="outline" size="icon">
      <Bold />
    </Button>
    <Button variant="outline" size="icon">
      <Italic />
    </Button>
    <Button variant="outline" size="icon">
      <Underline />
    </Button>
  </ButtonGroup>
);

export const ConTexto = () => (
  <ButtonGroup>
    <ButtonGroupText>https://</ButtonGroupText>
    <Button variant="outline">livo.app</Button>
  </ButtonGroup>
);
