import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const cardStyle = {
  height: 90,
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--border)',
  background: 'var(--card)',
  color: 'var(--card-foreground)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  marginBottom: 16,
};

export function GsapScrollReveal() {
  const scrollerRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray('.gsap-reveal-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            scroller: scrollerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    },
    { scope: scrollerRef }
  );

  return (
    <div
      ref={scrollerRef}
      style={{
        height: 240,
        overflowY: 'auto',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: 16,
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="gsap-reveal-card" style={cardStyle}>
          Tarjeta {n}
        </div>
      ))}
    </div>
  );
}
