import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command';
import { Calendar, Smile, Calculator, Settings } from 'lucide-react';

export default {
  title: 'UI/Command',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Command
    style={{
      width: 320,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border)',
    }}
  >
    <CommandInput placeholder="Escribe un comando o busca..." />
    <CommandList>
      <CommandEmpty>Sin resultados.</CommandEmpty>
      <CommandGroup heading="Sugerencias">
        <CommandItem>
          <Calendar />
          <span>Calendario</span>
        </CommandItem>
        <CommandItem>
          <Smile />
          <span>Emojis</span>
        </CommandItem>
        <CommandItem>
          <Calculator />
          <span>Calculadora</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Configuración">
        <CommandItem>
          <Settings />
          <span>Ajustes</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);
