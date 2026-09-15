import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(useGSAP);

const boxStyle = {
  width: 48,
  height: 48,
  borderRadius: 'var(--radius-md)',
  background: 'var(--primary)',
  color: 'var(--primary-foreground)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  fontSize: 14,
};

export function GsapStaggerDemo() {
  const container = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.from('.gsap-stagger-box', {
        opacity: 0,
        y: 24,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
      });
    },
    { scope: container }
  );

  const replay = contextSafe(() => {
    gsap.from('.gsap-stagger-box', {
      opacity: 0,
      y: 24,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power3.out',
    });
  });

  return (
    <div ref={container} style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 12 }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="gsap-stagger-box" style={boxStyle}>
            {n}
          </div>
        ))}
      </div>
      <Button onClick={replay} variant="outline" style={{ width: 'fit-content' }}>
        Reiniciar animación
      </Button>
    </div>
  );
}
