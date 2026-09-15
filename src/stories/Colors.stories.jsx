const groups = [
  {
    title: 'Base',
    pairs: [
      ['background', 'foreground'],
      ['card', 'card-foreground'],
      ['popover', 'popover-foreground'],
    ],
  },
  {
    title: 'Marca',
    pairs: [
      ['primary', 'primary-foreground'],
      ['secondary', 'secondary-foreground'],
      ['muted', 'muted-foreground'],
      ['accent', 'accent-foreground'],
      ['destructive', 'destructive-foreground'],
    ],
  },
  {
    title: 'Bordes y foco',
    pairs: [
      ['border', null],
      ['input', null],
      ['ring', null],
    ],
  },
  {
    title: 'Charts',
    pairs: [
      ['chart-1', null],
      ['chart-2', null],
      ['chart-3', null],
      ['chart-4', null],
      ['chart-5', null],
    ],
  },
  {
    title: 'Sidebar',
    pairs: [
      ['sidebar', 'sidebar-foreground'],
      ['sidebar-primary', 'sidebar-primary-foreground'],
      ['sidebar-accent', 'sidebar-accent-foreground'],
      ['sidebar-border', null],
      ['sidebar-ring', null],
    ],
  },
];

function Swatch({ bg, fg }) {
  return (
    <div
      style={{
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        minWidth: 160,
      }}
    >
      <div
        style={{
          height: 64,
          background: `var(--${bg})`,
          color: fg ? `var(--${fg})` : undefined,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        {fg ? 'Aa' : ''}
      </div>
      <div style={{ padding: '8px 10px', background: 'var(--card)' }}>
        <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--card-foreground)' }}>
          --{bg}
        </div>
        {fg && (
          <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)' }}>
            --{fg}
          </div>
        )}
      </div>
    </div>
  );
}

const grayScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const gradients = [
  { token: 'gradient-primary', label: 'Primary', css: 'linear-gradient(135deg, var(--chart-1), var(--primary))' },
  { token: 'gradient-surface', label: 'Surface', css: 'linear-gradient(180deg, var(--background), var(--muted))' },
  {
    token: 'gradient-spectrum',
    label: 'Spectrum',
    css: 'linear-gradient(90deg, var(--chart-1), var(--chart-2), var(--chart-3), var(--chart-4), var(--chart-5))',
  },
];

function GrayScale() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {grayScale.map((step) => (
        <div key={step} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
              background: `var(--gray-${step})`,
            }}
          />
          <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', marginTop: 6 }}>
            gray-{step}
          </div>
        </div>
      ))}
    </div>
  );
}

function Gradients() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {gradients.map((g) => (
        <div key={g.token}>
          <div
            style={{
              width: 200,
              height: 100,
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
              backgroundImage: `var(--${g.token})`,
            }}
          />
          <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', marginTop: 6 }}>
            --{g.token}
          </div>
          <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{g.label}</div>
        </div>
      ))}
    </div>
  );
}

function Palette() {
  return (
    <div style={{ display: 'grid', gap: 32 }}>
      {groups.map((group) => (
        <div key={group.title}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>{group.title}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {group.pairs.map(([bg, fg]) => (
              <Swatch key={bg} bg={bg} fg={fg} />
            ))}
          </div>
        </div>
      ))}

      <div>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Escala de grises</h3>
        <p style={{ fontSize: 13, color: 'var(--muted-foreground)', marginBottom: 12 }}>
          Neutros fijos (no cambian entre claro/oscuro) para usos que no son de superficie:
          divisores decorativos, placeholders, gráficos secundarios. Disponibles como utilidades
          Tailwind: <code>bg-gray-500</code>, <code>text-gray-700</code>, etc.
        </p>
        <GrayScale />
      </div>

      <div>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Degradados</h3>
        <p style={{ fontSize: 13, color: 'var(--muted-foreground)', marginBottom: 12 }}>
          Construidos combinando tokens existentes (nunca colores nuevos), así heredan el ajuste
          claro/oscuro automáticamente. Úsalos con{' '}
          <code>style=&#123;&#123; backgroundImage: 'var(--gradient-primary)' &#125;&#125;</code>.
        </p>
        <Gradients />
      </div>
    </div>
  );
}

export default {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Paleta = () => <Palette />;
