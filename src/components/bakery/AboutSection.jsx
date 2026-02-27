import { useEffect, useRef } from 'react';

const STATS = [
  { value: '2021', label: 'Est.' },
  { value: '100%', label: 'Made Fresh' },
  { value: '5★', label: 'Rated' },
  { value: 'Local', label: 'Lillington, NC' },
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    const items = sectionRef.current?.querySelectorAll('.reveal');
    items?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{
      padding: 'clamp(80px, 10vw, 140px) 24px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Divider */}
        <div className="divider-gold reveal" style={{ marginBottom: '60px' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* Text */}
          <div className="reveal">
            <span style={{
              fontSize: '11px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              fontFamily: 'Causten, Inter, sans-serif',
              fontWeight: '600',
            }}>Our Story</span>

            <h2 style={{
              fontFamily: 'Causten, Inter, sans-serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: '900',
              color: '#F5F0E8',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              marginTop: '16px',
              marginBottom: '24px',
            }}>
              Where Baking<br />
              <span className="gold-shimmer">Meets Science</span>
            </h2>

            <p style={{
              color: 'rgba(245,240,232,0.6)',
              fontSize: '16px',
              lineHeight: '1.85',
              fontFamily: 'Causten, Inter, sans-serif',
              marginBottom: '20px',
            }}>
              Founded in 2021, Bake Lab was born from a passion for precision baking
              and an obsession with flavor. We approach every recipe like an experiment —
              testing, refining, and perfecting until every bite tells a story.
            </p>
            <p style={{
              color: 'rgba(245,240,232,0.6)',
              fontSize: '16px',
              lineHeight: '1.85',
              fontFamily: 'Causten, Inter, sans-serif',
            }}>
              From our kitchen in Lillington, NC, we craft fresh-baked goods that
              bring the community together — one petite cheesecake, one perfect pastry at a time.
            </p>

            <a href="#order" className="btn-gold" style={{
              display: 'inline-block', marginTop: '36px',
              padding: '14px 36px', borderRadius: '4px',
              textDecoration: 'none', fontSize: '13px',
              fontFamily: 'Causten, Inter, sans-serif',
            }}>Order Today</a>
          </div>

          {/* Stats */}
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {STATS.map((s, i) => (
              <div key={i} className="card-dark" style={{
                padding: '32px 24px',
                borderRadius: '8px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(201,168,76,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontFamily: 'Causten, Inter, sans-serif',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: '900',
                  color: '#C9A84C',
                  lineHeight: '1',
                  marginBottom: '8px',
                }}>{s.value}</div>
                <div style={{
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.45)',
                  fontFamily: 'Causten, Inter, sans-serif',
                  fontWeight: '600',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-gold reveal" style={{ marginTop: '60px' }} />
      </div>
    </section>
  );
}