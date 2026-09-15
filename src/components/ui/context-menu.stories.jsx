import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
} from './context-menu';

export default {
  title: 'UI/ContextMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <ContextMenu>
    <ContextMenuTrigger
      style={{
        display: 'flex',
        height: 128,
        width: 260,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-md)',
        border: '1px dashed var(--border)',
        fontSize: 14,
        color: 'var(--muted-foreground)',
      }}
    >
      Clic derecho aquí
    </ContextMenuTrigger>
    <ContextMenuContent style={{ width: 180 }}>
      <ContextMenuLabel>Acciones</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>Copiar</ContextMenuItem>
      <ContextMenuItem>Pegar</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">Eliminar</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);
