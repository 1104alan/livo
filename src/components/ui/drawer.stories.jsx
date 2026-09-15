import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from './drawer';
import { Button } from './button';

export default {
  title: 'UI/Drawer',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Abrir drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>¿Confirmar acción?</DrawerTitle>
        <DrawerDescription>Este panel se desliza desde abajo.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button>Confirmar</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancelar</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
