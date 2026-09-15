const fonts = [
  { token: 'font-sans', label: 'Sans (texto general)' },
  { token: 'font-serif', label: 'Serif' },
  { token: 'font-mono', label: 'Mono (código)' },
];

const radii = [
  { token: 'radius-sm', label: 'sm' },
  { token: 'radius-md', label: 'md' },
  { token: 'radius-lg', label: 'lg' },
  { token: 'radius-xl', label: 'xl' },
];

const shadows = [
  { token: 'shadow-2xs', label: '2xs' },
  { token: 'shadow-xs', label: 'xs' },
  { token: 'shadow-sm', label: 'sm' },
  { token: 'shadow', label: 'DEFAULT' },
  { token: 'shadow-md', label: 'md' },
  { token: 'shadow-lg', label: 'lg' },
  { token: 'shadow-xl', label: 'xl' },
  { token: 'shadow-2xl', label: '2xl' },
];

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>{title}</h3>
      {children}
    </div>
  );
}

function TypographyDemo() {
  return (
    <div>
      <Section title="Familias tipográficas">
        <div style={{ display: 'grid', gap: 12 }}>
          {fonts.map((f) => (
            <div
              key={f.token}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: 16,
              }}
            >
              <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)', marginBottom: 4 }}>
                --{f.token} — {f.label}
              </div>
              <div style={{ fontFamily: `var(--${f.token})`, fontSize: 22 }}>
                Livo — Ag 0123456789
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Escala de texto (Tailwind)">
        <div style={{ display: 'grid', gap: 8 }}>
          {['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'].map((cls) => (
            <div key={cls} className={cls} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted-foreground)', width: 90 }}>
                {cls}
              </span>
              <span>Livo design system</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Radios (--radius)">
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {radii.map((r) => (
            <div key={r.token} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  background: 'var(--primary)',
                  borderRadius: `var(--${r.token})`,
                }}
              />
              <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', marginTop: 6 }}>
                --{r.token}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Sombras (--shadow-*)">
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', padding: '8px 0' }}>
          {shadows.map((s) => (
            <div key={s.token} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  background: 'var(--card)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: `var(--${s.token})`,
                }}
              />
              <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Tokens = () => <TypographyDemo />;
