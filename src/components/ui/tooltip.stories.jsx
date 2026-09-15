import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { Button } from './button';

export default {
  title: 'UI/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Pasa el mouse</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Este es un tooltip</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
