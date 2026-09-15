import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card';
import { Button } from './button';

export default {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Card style={{ width: 320 }}>
    <CardHeader>
      <CardTitle>Crear proyecto</CardTitle>
      <CardDescription>Completa los datos para empezar.</CardDescription>
      <CardAction>
        <Button variant="ghost" size="sm">
          ⋯
        </Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p style={{ fontSize: 14 }}>
        Contenido de ejemplo dentro de la tarjeta.
      </p>
    </CardContent>
    <CardFooter style={{ gap: 8 }}>
      <Button variant="outline">Cancelar</Button>
      <Button>Guardar</Button>
    </CardFooter>
  </Card>
);
