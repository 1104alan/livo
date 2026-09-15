import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Button } from './button';

export default {
  title: 'UI/DropdownMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Abrir menú</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent style={{ width: 200 }}>
      <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Perfil</DropdownMenuItem>
      <DropdownMenuItem>Configuración</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">Cerrar sesión</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
