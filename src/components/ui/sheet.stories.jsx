import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from './sheet';
import { Button } from './button';
import { Label } from './label';
import { Input } from './input';

export default {
  title: 'UI/Sheet',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Abrir sheet</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Editar perfil</SheetTitle>
        <SheetDescription>
          Haz cambios en tu perfil aquí. Guarda cuando termines.
        </SheetDescription>
      </SheetHeader>
      <div style={{ display: 'grid', gap: 12, padding: '0 16px' }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <Label htmlFor="sheet-name">Nombre</Label>
          <Input id="sheet-name" defaultValue="Alan Torres" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button>Guardar cambios</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);
