const principios = [
  {
    title: 'Tutea, siempre',
    body: '"Guarda tus cambios", nunca "Guarde sus cambios". Es una conversación, no un formulario legal.',
  },
  {
    title: 'Frases cortas',
    body: 'Una idea por oración. Si necesitas una coma para explicar algo, probablemente son dos frases.',
  },
  {
    title: 'Cero jerga innecesaria',
    body: '"No se pudo guardar" en vez de "Error 500: fallo en la persistencia del recurso".',
  },
  {
    title: 'Cálido, no efusivo',
    body: 'Cercano no es lo mismo que gritar con emojis y signos de exclamación en cada frase.',
  },
];

const antesDespues = [
  ['"Por favor, proceda a ingresar su dirección de correo electrónico"', '"Escribe tu correo"'],
  ['"Se ha producido un error inesperado durante el procesamiento"', '"Algo salió mal. Intenta de nuevo"'],
  ['"¡¡¡Tu cuenta fue creada exitosamente!!! 🎉🎉🎉"', '"Listo, tu cuenta ya está creada"'],
  ['"El usuario no posee los permisos necesarios"', '"No tienes permiso para hacer esto"'],
  ['"Haga clic aquí para continuar"', '"Continuar"'],
];

const ejemplosReales = [
  ['Botón de reinicio de animación', '"Reiniciar animación"', 'no "Reiniciar la animación desde el principio"'],
  ['Confirmación al copiar un ícono', '"Copiado: Anchor"', 'directo, sin "¡El ícono se copió exitosamente a tu portapapeles!"'],
  ['Buscador de íconos', '"Buscar icono... (ej. arrow, user, check)"', 'el ejemplo entre paréntesis ayuda sin sonar a instructivo'],
  ['Estado vacío', '"Sin resultados" + "No encontramos nada que coincida con tu búsqueda"', 'reconoce el problema sin culpar a quien busca'],
];

const guiaRapida = [
  ['Botones', 'Verbo en infinitivo o imperativo tú.', '"Guardar cambios", "Eliminar cuenta", "Continuar".'],
  ['Errores', 'Qué pasó + qué hacer. Nunca culpes a la persona.', '"Ese campo está mal" → "Revisa el formato del correo".'],
  ['Estados vacíos', 'Reconoce la situación con calidez y ofrece una acción.', '"Aún no tienes proyectos" + botón "Crear el primero".'],
  ['Confirmaciones/toasts', 'Cortas, en pasado o presente simple.', '"Copiado", "Guardado", "Listo".'],
  ['Tooltips', 'Una frase, sin punto final si es muy corta.', '—'],
];

const checklist = [
  '¿Lo leerías en voz alta sin sonar raro? Si no, reescríbelo.',
  '¿Tutea? (nunca "usted")',
  '¿Tiene una sola idea por oración?',
  '¿Evita jerga que la persona promedio no entendería?',
  '¿Sería igual de claro sin signos de exclamación?',
];

function Card({ title, body }) {
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 16 }}>
      <strong>{title}</strong>
      <p style={{ fontSize: 13, color: 'var(--muted-foreground)', marginTop: 4 }}>{body}</p>
    </div>
  );
}

function Table({ head, rows }) {
  return (
    <div style={{ overflowX: 'auto', margin: '16px 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                style={{
                  textAlign: 'left',
                  padding: '8px 12px',
                  borderBottom: '1px solid var(--border)',
                  color: 'var(--muted-foreground)',
                  fontWeight: 600,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '8px 12px', borderBottom: '1px solid var(--border)' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Principios() {
  return (
    <div
      style={{
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        margin: '16px 0',
      }}
    >
      {principios.map((p) => (
        <Card key={p.title} title={p.title} body={p.body} />
      ))}
    </div>
  );
}

export function AntesDespues() {
  return <Table head={['❌ Evitar', '✅ En su lugar']} rows={antesDespues} />;
}

export function EjemplosReales() {
  return (
    <ul style={{ display: 'grid', gap: 8, paddingLeft: 20, fontSize: 14 }}>
      {ejemplosReales.map(([label, quote, note]) => (
        <li key={label}>
          {label}: <strong>{quote}</strong> — {note}
        </li>
      ))}
    </ul>
  );
}

export function GuiaRapida() {
  return <Table head={['Tipo de texto', 'Regla', 'Ejemplo']} rows={guiaRapida} />;
}

export function Checklist() {
  return (
    <ol style={{ display: 'grid', gap: 6, paddingLeft: 20, fontSize: 14 }}>
      {checklist.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}
