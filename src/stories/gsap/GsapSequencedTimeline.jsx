import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(useGSAP);

const steps = ['Validando', 'Subiendo', 'Procesando', 'Listo'];

export function GsapSequencedTimeline() {
  const container = useRef(null);
  const tlRef = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      tlRef.current = gsap.timeline({ paused: true });
      tlRef.current
        .set('.gsap-step', { opacity: 0.35 })
        .to('.gsap-bar-fill', { width: '100%', duration: 1.4, ease: 'power1.inOut' })
        .to('.gsap-step', { opacity: 1, stagger: 0.35 }, 0)
        .fromTo(
          '.gsap-check',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(3)' }
        );
    },
    { scope: container }
  );

  const play = contextSafe(() => {
    tlRef.current.restart();
  });

  return (
    <div ref={container} style={{ display: 'grid', gap: 16, width: 320 }}>
      <div
        style={{
          height: 8,
          borderRadius: 9999,
          background: 'var(--muted)',
          overflow: 'hidden',
        }}
      >
        <div
          className="gsap-bar-fill"
          style={{ height: '100%', width: '0%', background: 'var(--primary)' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {steps.map((step) => (
          <span key={step} className="gsap-step" style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>
            {step}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <CheckCircle2 className="gsap-check size-5" style={{ color: 'var(--primary)' }} />
        <Button onClick={play} variant="outline" size="sm">
          Reproducir secuencia
        </Button>
      </div>
    </div>
  );
}
