import { useMemo, useState } from 'react';
import { icons } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Input } from '@/components/ui/input';

const iconNames = Object.keys(icons).sort();

function IconGallery() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return iconNames;
    return iconNames.filter((name) => name.toLowerCase().includes(q));
  }, [query]);

  const copyImport = (name) => {
    navigator.clipboard?.writeText(`import { ${name} } from 'lucide-react';`).catch(() => {});
    toast(`Copiado: ${name}`, {
      description: `import { ${name} } from 'lucide-react';`,
    });
  };

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Toaster />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Input
          placeholder="Buscar icono... (ej. arrow, user, check)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ maxWidth: 320 }}
        />
        <span style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>
          {filtered.length} de {iconNames.length} iconos
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
          gap: 8,
        }}
      >
        {filtered.map((name) => {
          const IconComponent = icons[name];
          return (
            <button
              key={name}
              type="button"
              onClick={() => copyImport(name)}
              title={`Copiar: import { ${name} } from 'lucide-react'`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                padding: '12px 8px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)',
                background: 'var(--card)',
                color: 'var(--card-foreground)',
                cursor: 'pointer',
              }}
            >
              <IconComponent size={20} />
              <span
                style={{
                  fontSize: 10,
                  lineHeight: 1.2,
                  textAlign: 'center',
                  wordBreak: 'break-word',
                  color: 'var(--muted-foreground)',
                }}
              >
                {name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default {
  title: 'Foundations/Icons',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Galeria = () => <IconGallery />;
