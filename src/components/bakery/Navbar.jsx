import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Order', href: '#order' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo — Periodic Table Element Style */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '48px', height: '48px',
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%)',
            border: '1.5px solid #C9A84C',
            borderRadius: '4px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
            padding: '2px',
            flexShrink: 0,
          }}>
            {/* Atomic number */}
            <span style={{
              position: 'absolute', top: '3px', left: '5px',
              fontSize: '8px', fontWeight: '700',
              color: '#C9A84C', fontFamily: 'Causten, Inter, sans-serif',
              lineHeight: 1,
            }}>1</span>
            {/* Symbol */}
            <span style={{
              fontSize: '20px', fontWeight: '900',
              color: '#C9A84C', fontFamily: 'Causten, Inter, sans-serif',
              letterSpacing: '-1px', lineHeight: 1,
              marginTop: '4px',
            }}>BL</span>
            {/* Element name */}
            <span style={{
              fontSize: '6.5px', fontWeight: '600',
              color: 'rgba(201,168,76,0.7)', fontFamily: 'Causten, Inter, sans-serif',
              letterSpacing: '0.05em', textTransform: 'uppercase',
              lineHeight: 1, marginTop: '2px',
            }}>Bake Lab</span>
          </div>
          <img
            src="/images/bake-lab-stack.png"
            alt="Bake Lab"
            style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{
                color: 'rgba(245,240,232,0.75)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
                fontFamily: 'Causten, Inter, sans-serif',
              }}
                onMouseEnter={e => e.target.style.color = '#C9A84C'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.75)'}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#order"
          className="hidden md:block btn-gold"
          style={{
            padding: '10px 24px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '12px',
            fontFamily: 'Causten, Inter, sans-serif',
            letterSpacing: '0.12em',
          }}>Order Now</a>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C9A84C', padding: '4px' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          padding: '20px 24px',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                color: 'rgba(245,240,232,0.8)',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(201,168,76,0.1)',
                fontFamily: 'Causten, Inter, sans-serif',
              }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}