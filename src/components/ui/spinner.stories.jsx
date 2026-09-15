import { Spinner } from './spinner';

export default {
  title: 'UI/Spinner',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => <Spinner />;

export const Tamaños = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <Spinner className="size-3" />
    <Spinner className="size-4" />
    <Spinner className="size-6" />
    <Spinner className="size-8" />
  </div>
);
