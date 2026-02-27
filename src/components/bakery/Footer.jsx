export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(201,168,76,0.12)',
      padding: '40px 24px',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
        textAlign: 'center',
      }}>
        {/* Logo — Periodic Table Element Style */}
        <div style={{
          width: '44px', height: '44px',
          background: '#0A0A0A',
          border: '1.5px solid #C9A84C',
          borderRadius: '4px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          position: 'relative', padding: '2px',
        }}>
          <span style={{
            position: 'absolute', top: '3px', left: '4px',
            fontSize: '7px', fontWeight: '700',
            color: '#C9A84C', fontFamily: 'Causten, Inter, sans-serif', lineHeight: 1,
          }}>1</span>
          <span style={{
            fontSize: '17px', fontWeight: '900',
            color: '#C9A84C', fontFamily: 'Causten, Inter, sans-serif',
            letterSpacing: '-1px', lineHeight: 1, marginTop: '4px',
          }}>BL</span>
          <span style={{
            fontSize: '6px', fontWeight: '600',
            color: 'rgba(201,168,76,0.7)', fontFamily: 'Causten, Inter, sans-serif',
            letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1, marginTop: '2px',
          }}>Bake Lab</span>
        </div>

        <p style={{
          fontSize: '13px', color: 'rgba(245,240,232,0.35)',
          fontFamily: 'Causten, Inter, sans-serif', lineHeight: '1.6',
        }}>
          67 Marshbanks St, Lillington, NC 27546 · (910) 984-1470
        </p>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Home', 'About', 'Order', 'Reviews', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.35)', textDecoration: 'none',
              fontFamily: 'Causten, Inter, sans-serif', fontWeight: '600',
              transition: 'color 0.2s ease',
            }}
              onMouseEnter={e => e.target.style.color = '#C9A84C'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.35)'}
            >{l}</a>
          ))}
        </div>

        <div className="divider-gold" style={{ width: '100%', maxWidth: '300px' }} />

        <p style={{
          fontSize: '11px', color: 'rgba(245,240,232,0.2)',
          fontFamily: 'Causten, Inter, sans-serif',
          letterSpacing: '0.08em',
        }}>
          © {new Date().getFullYear()} Bake Lab · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}