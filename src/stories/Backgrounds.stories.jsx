import fondo01 from '../assets/backgrounds/fondo-01.jpg';
import fondo02 from '../assets/backgrounds/fondo-02.jpg';

const colorBackgrounds = [
  { token: 'background', label: 'Background', text: 'foreground' },
  { token: 'card', label: 'Card', text: 'card-foreground' },
  { token: 'muted', label: 'Muted', text: 'muted-foreground' },
  { token: 'accent', label: 'Accent', text: 'accent-foreground' },
  { token: 'primary', label: 'Primary', text: 'primary-foreground' },
  { token: 'secondary', label: 'Secondary', text: 'secondary-foreground' },
  { token: 'sidebar', label: 'Sidebar', text: 'sidebar-foreground' },
];

const images = [
  {
    src: fondo02,
    label: 'Cover simple',
  },
  {
    src: fondo02,
    label: 'Con overlay + texto',
    overlay: true,
  },
  {
    src: fondo01,
    label: 'Con degradado inferior',
    gradient: true,
  },
];

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>{title}</h3>
      {children}
    </div>
  );
}

function ColorBackgrounds() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {colorBackgrounds.map((bg) => (
        <div
          key={bg.token}
          style={{
            width: 160,
            height: 100,
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)',
            background: `var(--${bg.token})`,
            color: `var(--${bg.text})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600 }}>{bg.label}</span>
          <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', opacity: 0.8 }}>
            bg-{bg.token}
          </span>
        </div>
      ))}
    </div>
  );
}

function ImageBackgrounds() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {images.map((img) => (
        <div key={img.label} style={{ width: 220 }}>
          <div
            style={{
              position: 'relative',
              height: 140,
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              backgroundImage: `url(${img.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {img.overlay && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'oklch(0 0 0 / 0.45)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 12,
                }}
              >
                <span style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>
                  Texto sobre overlay
                </span>
              </div>
            )}
            {img.gradient && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, oklch(0 0 0 / 0.65), transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 12,
                }}
              >
                <span style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>
                  Degradado inferior
                </span>
              </div>
            )}
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted-foreground)', marginTop: 6 }}>{img.label}</p>
        </div>
      ))}
    </div>
  );
}

function BackgroundsDemo() {
  return (
    <div>
      <Section title="Fondos de color">
        <p style={{ fontSize: 13, color: 'var(--muted-foreground)', marginBottom: 12 }}>
          Usa siempre el par fondo/texto correspondiente (ej. <code>bg-card</code> con{' '}
          <code>text-card-foreground</code>) para mantener el contraste correcto en ambos temas.
        </p>
        <ColorBackgrounds />
      </Section>

      <Section title="Fondos de imagen">
        <p style={{ fontSize: 13, color: 'var(--muted-foreground)', marginBottom: 12 }}>
          Para texto sobre imágenes usa un overlay oscuro semitransparente o un degradado —
          nunca coloques texto directamente sobre una foto sin refuerzo de contraste.
        </p>
        <ImageBackgrounds />
      </Section>
    </div>
  );
}

export default {
  title: 'Foundations/Backgrounds',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Default = () => <BackgroundsDemo />;
