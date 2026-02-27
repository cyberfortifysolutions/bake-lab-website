import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const HOURS = [
  { day: 'Monday – Friday', time: '10:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const INFO = [
  {
    icon: MapPin,
    label: 'Location',
    value: '67 Marshbanks St\nLillington, NC 27546',
    link: 'https://maps.google.com/?q=67+Marshbanks+St+Lillington+NC+27546',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(910) 984-1470',
    link: 'tel:9109841470',
  },
  {
    icon: Mail,
    label: 'Orders',
    value: 'orders@ncbakelab.com',
    link: 'mailto:orders@ncbakelab.com',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{
      padding: 'clamp(80px, 10vw, 140px) 24px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="divider-gold" style={{ marginBottom: '60px' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase',
            color: '#C9A84C', fontFamily: 'Causten, Inter, sans-serif', fontWeight: '600',
          }}>Find Us</span>
          <h2 style={{
            fontFamily: 'Causten, Inter, sans-serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '900',
            color: '#F5F0E8',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            marginTop: '16px',
          }}>Visit the Lab</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {/* Contact cards */}
          {INFO.map(({ icon: Icon, label, value, link }, i) => (
            <a key={i} href={link} target={link.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                display: 'block', textDecoration: 'none',
                background: 'rgba(16,16,16,0.85)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '10px', padding: '32px 28px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(201,168,76,0.07)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '8px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <Icon size={20} style={{ color: '#C9A84C' }} />
              </div>
              <div style={{
                fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.6)', fontFamily: 'Causten, Inter, sans-serif',
                fontWeight: '600', marginBottom: '8px',
              }}>{label}</div>
              <div style={{
                fontSize: '16px', color: '#F5F0E8', fontFamily: 'Causten, Inter, sans-serif',
                fontWeight: '500', lineHeight: '1.6', whiteSpace: 'pre-line',
              }}>{value}</div>
            </a>
          ))}

          {/* Hours card */}
          <div style={{
            background: 'rgba(16,16,16,0.85)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '10px', padding: '32px 28px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              width: '48px', height: '48px', borderRadius: '8px',
              background: 'rgba(201,168,76,0.1)',
              border: '1px solid rgba(201,168,76,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px',
            }}>
              <Clock size={20} style={{ color: '#C9A84C' }} />
            </div>
            <div style={{
              fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)', fontFamily: 'Causten, Inter, sans-serif',
              fontWeight: '600', marginBottom: '16px',
            }}>Hours</div>
            {HOURS.map((h, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                paddingBottom: i < HOURS.length - 1 ? '10px' : 0,
                marginBottom: i < HOURS.length - 1 ? '10px' : 0,
                borderBottom: i < HOURS.length - 1 ? '1px solid rgba(201,168,76,0.08)' : 'none',
              }}>
                <span style={{
                  fontSize: '13px', color: 'rgba(245,240,232,0.6)',
                  fontFamily: 'Causten, Inter, sans-serif',
                }}>{h.day}</span>
                <span style={{
                  fontSize: '13px', fontWeight: '600',
                  color: h.time === 'Closed' ? 'rgba(245,240,232,0.3)' : '#F5F0E8',
                  fontFamily: 'Causten, Inter, sans-serif',
                }}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}