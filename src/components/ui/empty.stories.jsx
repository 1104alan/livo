import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from './empty';
import { Button } from './button';
import { Inbox } from 'lucide-react';

export default {
  title: 'UI/Empty',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Empty style={{ width: 360, border: '1px dashed var(--border)' }}>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Inbox />
      </EmptyMedia>
      <EmptyTitle>Sin resultados</EmptyTitle>
      <EmptyDescription>No encontramos nada que coincida con tu búsqueda.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button variant="outline" size="sm">
        Limpiar filtros
      </Button>
    </EmptyContent>
  </Empty>
);
