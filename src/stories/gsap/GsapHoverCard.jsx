import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function GsapHoverCard() {
  const container = useRef(null);
  const cardRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(
    () => {
      tlRef.current = gsap.timeline({ paused: true }).to(cardRef.current, {
        scale: 1.05,
        rotate: -2,
        boxShadow: '0 12px 24px rgba(0,0,0,0.18)',
        duration: 0.3,
        ease: 'power2.out',
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div
        ref={cardRef}
        onMouseEnter={() => tlRef.current.play()}
        onMouseLeave={() => tlRef.current.reverse()}
        style={{
          width: 180,
          height: 110,
          borderRadius: 'var(--radius-lg)',
          background: 'var(--card)',
          border: '1px solid var(--border)',
          color: 'var(--card-foreground)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Pasa el mouse
      </div>
    </div>
  );
}
