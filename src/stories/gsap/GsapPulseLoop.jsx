import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function GsapPulseLoop() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to('.gsap-pulse-dot', {
        scale: 1.6,
        opacity: 0.4,
        duration: 0.9,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.2,
          repeat: -1,
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="gsap-pulse-dot"
          style={{
            width: 16,
            height: 16,
            borderRadius: '9999px',
            background: 'var(--primary)',
          }}
        />
      ))}
      <span style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>
        repeat: -1, yoyo: true, stagger.repeat: -1
      </span>
    </div>
  );
}
