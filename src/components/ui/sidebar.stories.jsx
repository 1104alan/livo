import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from './sidebar';
import { Home, Inbox, Settings } from 'lucide-react';

export default {
  title: 'UI/Sidebar',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

const items = [
  { title: 'Inicio', icon: Home },
  { title: 'Bandeja', icon: Inbox },
  { title: 'Ajustes', icon: Settings },
];

export const Default = () => (
  <div
    style={{
      height: 420,
      position: 'relative',
      transform: 'translateZ(0)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
    }}
  >
    <SidebarProvider style={{ minHeight: '100%' }}>
      <Sidebar>
        <SidebarHeader>
          <span style={{ fontSize: 14, fontWeight: 600, padding: '4px 8px' }}>livo</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navegación</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <SidebarTrigger />
          <span style={{ fontSize: 14, color: 'var(--muted-foreground)' }}>Contenido principal</span>
        </div>
      </SidebarInset>
    </SidebarProvider>
  </div>
);
