import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './form';
import { Input } from './input';
import { Button } from './button';
import { Toaster } from './sonner';

export default {
  title: 'UI/Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const schema = z.object({
  username: z.string().min(2, 'El usuario debe tener al menos 2 caracteres.'),
});

function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { username: '' },
  });

  const onSubmit = (values) => {
    toast('Formulario enviado', {
      description: `username: ${values.username}`,
    });
  };

  return (
    <>
      <Toaster />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} style={{ width: 280, display: 'grid', gap: 16 }}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input placeholder="alan_torres" {...field} />
                </FormControl>
                <FormDescription>Tu nombre público de usuario.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </>
  );
}

export const Default = () => <ProfileForm />;
