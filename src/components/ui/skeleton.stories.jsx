import { Skeleton } from './skeleton';

export default {
  title: 'UI/Skeleton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <Skeleton style={{ height: 48, width: 48, borderRadius: '9999px' }} />
    <div style={{ display: 'grid', gap: 8 }}>
      <Skeleton style={{ height: 16, width: 200 }} />
      <Skeleton style={{ height: 16, width: 160 }} />
    </div>
  </div>
);
