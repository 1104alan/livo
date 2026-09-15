import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from './popover';
import { Button } from './button';

export default {
  title: 'UI/Popover',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Abrir popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverHeader>
        <PopoverTitle>Dimensiones</PopoverTitle>
        <PopoverDescription>
          Ajusta las dimensiones del elemento.
        </PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
);
