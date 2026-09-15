import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './chart';

export default {
  title: 'UI/Chart',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const data = [
  { mes: 'Ene', visitas: 186 },
  { mes: 'Feb', visitas: 305 },
  { mes: 'Mar', visitas: 237 },
  { mes: 'Abr', visitas: 273 },
  { mes: 'May', visitas: 209 },
  { mes: 'Jun', visitas: 314 },
];

const config = {
  visitas: {
    label: 'Visitas',
    color: 'var(--chart-1)',
  },
};

export const Default = () => (
  <ChartContainer config={config} style={{ width: 360, height: 240 }}>
    <BarChart data={data}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="mes" tickLine={false} axisLine={false} tickMargin={8} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="visitas" fill="var(--color-visitas)" radius={4} />
    </BarChart>
  </ChartContainer>
);
