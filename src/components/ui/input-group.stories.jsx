import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  InputGroupText,
} from './input-group';
import { Search, Mail } from 'lucide-react';

export default {
  title: 'UI/InputGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const ConIcono = () => (
  <InputGroup style={{ width: 260 }}>
    <InputGroupAddon>
      <Search className="size-4" />
    </InputGroupAddon>
    <InputGroupInput placeholder="Buscar..." />
  </InputGroup>
);

export const ConBoton = () => (
  <InputGroup style={{ width: 260 }}>
    <InputGroupAddon>
      <Mail className="size-4" />
    </InputGroupAddon>
    <InputGroupInput placeholder="tu@correo.com" />
    <InputGroupAddon align="inline-end">
      <InputGroupButton>Enviar</InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export const ConTexto = () => (
  <InputGroup style={{ width: 260 }}>
    <InputGroupAddon>
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput placeholder="livo.app" />
  </InputGroup>
);
