import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from './menubar';

export default {
  title: 'UI/Menubar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Archivo</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Nuevo <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Abrir <MenubarShortcut>⌘O</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Guardar</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Editar</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Deshacer</MenubarItem>
        <MenubarItem>Rehacer</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);
