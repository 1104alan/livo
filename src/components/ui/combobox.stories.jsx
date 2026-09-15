import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from './combobox';

export default {
  title: 'UI/Combobox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const frameworks = ['React', 'Vue', 'Svelte', 'Angular', 'Solid'];

export const Default = () => (
  <Combobox items={frameworks}>
    <ComboboxInput placeholder="Buscar framework..." style={{ width: 220 }} />
    <ComboboxContent>
      <ComboboxList>
        <ComboboxEmpty>Sin resultados.</ComboboxEmpty>
        {frameworks.map((f) => (
          <ComboboxItem key={f} value={f}>
            {f}
          </ComboboxItem>
        ))}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
);
