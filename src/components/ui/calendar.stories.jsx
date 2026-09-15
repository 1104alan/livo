import { useState } from 'react';
import { Calendar } from './calendar';

export default {
  title: 'UI/Calendar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      style={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
    />
  );
};
