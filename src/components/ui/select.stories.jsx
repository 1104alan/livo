import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from './select';

export default {
  title: 'UI/Select',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Select>
    <SelectTrigger style={{ width: 200 }}>
      <SelectValue placeholder="Selecciona una fruta" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Frutas</SelectLabel>
        <SelectItem value="manzana">Manzana</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="uva">Uva</SelectItem>
        <SelectItem value="naranja">Naranja</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);
