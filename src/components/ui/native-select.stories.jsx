import { NativeSelect, NativeSelectOption } from './native-select';

export default {
  title: 'UI/NativeSelect',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <NativeSelect style={{ width: 220 }} defaultValue="manzana">
    <NativeSelectOption value="manzana">Manzana</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
    <NativeSelectOption value="uva">Uva</NativeSelectOption>
  </NativeSelect>
);
