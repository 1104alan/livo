import { toast } from 'sonner';
import { Toaster } from './sonner';
import { Button } from './button';

export default {
  title: 'UI/Sonner',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <>
    <Toaster />
    <Button
      variant="outline"
      onClick={() =>
        toast('Evento creado', {
          description: 'Lunes 15 de septiembre, 9:00am',
        })
      }
    >
      Mostrar toast
    </Button>
  </>
);
