import { Alert, AlertTitle, AlertDescription } from './alert';
import { CircleAlert, Terminal } from 'lucide-react';

export default {
  title: 'UI/Alert',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Alert style={{ width: 360 }}>
    <Terminal />
    <AlertTitle>Aviso</AlertTitle>
    <AlertDescription>
      Puedes agregar componentes usando el CLI de shadcn.
    </AlertDescription>
  </Alert>
);

export const Destructivo = () => (
  <Alert variant="destructive" style={{ width: 360 }}>
    <CircleAlert />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Ocurrió un problema al procesar la solicitud.
    </AlertDescription>
  </Alert>
);
