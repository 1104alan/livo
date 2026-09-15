import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

export default {
  title: 'UI/Dialog',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Editar perfil</Button>
    </DialogTrigger>
    <DialogContent style={{ maxWidth: 420 }}>
      <DialogHeader>
        <DialogTitle>Editar perfil</DialogTitle>
        <DialogDescription>
          Haz cambios en tu perfil aquí. Guarda cuando termines.
        </DialogDescription>
      </DialogHeader>
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <Label htmlFor="name-story">Nombre</Label>
          <Input id="name-story" defaultValue="Alan Torres" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Guardar cambios</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
