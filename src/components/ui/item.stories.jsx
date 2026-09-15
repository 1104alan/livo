import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
} from './item';
import { Button } from './button';
import { Bell } from 'lucide-react';

export default {
  title: 'UI/Item',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <ItemGroup style={{ width: 320, border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
    <Item>
      <ItemMedia variant="icon">
        <Bell />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Notificaciones</ItemTitle>
        <ItemDescription>Recibe alertas de actividad.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Activar
        </Button>
      </ItemActions>
    </Item>
    <ItemSeparator />
    <Item>
      <ItemMedia variant="icon">
        <Bell />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Newsletter</ItemTitle>
        <ItemDescription>Novedades una vez al mes.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Activar
        </Button>
      </ItemActions>
    </Item>
  </ItemGroup>
);
