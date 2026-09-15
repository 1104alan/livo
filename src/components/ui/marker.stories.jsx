import { Marker, MarkerIcon, MarkerContent } from './marker';
import { Sparkles } from 'lucide-react';

export default {
  title: 'UI/Marker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <div style={{ width: 260 }}>
    <Marker>
      <MarkerIcon>
        <Sparkles />
      </MarkerIcon>
      <MarkerContent>Generado con IA</MarkerContent>
    </Marker>
  </div>
);

export const Separador = () => (
  <div style={{ width: 260 }}>
    <Marker variant="separator">
      <MarkerContent>hoy</MarkerContent>
    </Marker>
  </div>
);
