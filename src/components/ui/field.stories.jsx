import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldSeparator,
} from './field';
import { Input } from './input';
import { Checkbox } from './checkbox';

export default {
  title: 'UI/Field',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <FieldSet style={{ width: 320 }}>
    <FieldLegend>Perfil</FieldLegend>
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="field-name">Nombre</FieldLabel>
        <Input id="field-name" placeholder="Alan Torres" />
        <FieldDescription>Así aparecerás en la plataforma.</FieldDescription>
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="field-terms" />
        <FieldLabel htmlFor="field-terms">Acepto los términos</FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
);
