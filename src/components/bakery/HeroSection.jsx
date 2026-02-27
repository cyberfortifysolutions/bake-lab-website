import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 24px 80px',
        zIndex: 1,
      }}
    >
      {/* Radial glow behind text */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div ref={headlineRef} style={{ position: 'relative', zIndex: 2 }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          marginBottom: '28px',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            fontWeight: '600',
            fontFamily: 'Causten, Inter, sans-serif',
          }}>Est. 2021 · Lillington, NC</span>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
        </div>

        {/* Main Logo Image */}
        <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/bake-lab-logo.png"
            alt="Bake Lab"
            style={{
              width: 'clamp(260px, 50vw, 520px)',
              height: 'auto',
              filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.25))',
              userSelect: 'none',
            }}
          />
        </div>

        {/* Subtitle */}
        <div style={{ marginTop: '24px', marginBottom: '48px' }}>
          <p style={{
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: 'rgba(245,240,232,0.55)',
            letterSpacing: '0.08em',
            fontFamily: 'Causten, Inter, sans-serif',
            fontWeight: '400',
          }}>
            Artisan baked goods, crafted with science & soul
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#order" style={{
            padding: '16px 40px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '13px',
            fontFamily: 'Causten, Inter, sans-serif',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            border: '1px solid rgba(201,168,76,0.35)',
            transition: 'all 0.3s ease',
            display: 'inline-block',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
              e.currentTarget.style.borderColor = '#C9A84C';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
            }}
          >
            Place an Order
          </a>
          <a href="#about" style={{
            padding: '16px 40px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '13px',
            fontFamily: 'Causten, Inter, sans-serif',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            border: '1px solid rgba(201,168,76,0.35)',
            transition: 'all 0.3s ease',
            display: 'inline-block',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
              e.currentTarget.style.borderColor = '#C9A84C';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
            }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '36px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        color: 'rgba(201,168,76,0.5)',
        animation: 'float 2s ease-in-out infinite',
        zIndex: 2,
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Causten, Inter, sans-serif' }}>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}