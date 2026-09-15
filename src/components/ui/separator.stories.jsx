import { Separator } from './separator';

export default {
  title: 'UI/Separator',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Horizontal = () => (
  <div style={{ width: 260 }}>
    <p style={{ fontSize: 14 }}>Sección uno</p>
    <Separator style={{ margin: '12px 0' }} />
    <p style={{ fontSize: 14 }}>Sección dos</p>
  </div>
);

export const Vertical = () => (
  <div style={{ display: 'flex', alignItems: 'center', height: 32, gap: 12 }}>
    <span style={{ fontSize: 14 }}>Blog</span>
    <Separator orientation="vertical" />
    <span style={{ fontSize: 14 }}>Docs</span>
    <Separator orientation="vertical" />
    <span style={{ fontSize: 14 }}>Source</span>
  </div>
);
