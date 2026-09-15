import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

export default {
  title: 'UI/Tabs',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Tabs defaultValue="cuenta" style={{ width: 320 }}>
    <TabsList>
      <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
      <TabsTrigger value="password">Contraseña</TabsTrigger>
    </TabsList>
    <TabsContent value="cuenta">
      Actualiza tu información de cuenta aquí.
    </TabsContent>
    <TabsContent value="password">Cambia tu contraseña aquí.</TabsContent>
  </Tabs>
);
