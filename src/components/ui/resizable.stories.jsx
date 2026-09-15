import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './resizable';

export default {
  title: 'UI/Resizable',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <ResizablePanelGroup
    direction="horizontal"
    style={{
      height: 200,
      width: 320,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border)',
    }}
  >
    <ResizablePanel defaultSize={50}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Panel uno</span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={50}>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Panel dos</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
);
