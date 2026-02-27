import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function OrderForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    item: '',
    date: '',
    notes: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          item: form.item,
          date: form.date,
          notes: form.notes || 'None',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('sent');
      setForm({ name: '', email: '', phone: '', item: '', date: '', notes: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '6px',
    fontSize: '15px',
    fontFamily: 'Causten, Inter, sans-serif',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(201,168,76,0.2)',
    color: '#F5F0E8',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#C9A84C',
    fontFamily: 'Causten, Inter, sans-serif',
    fontWeight: '600',
    marginBottom: '8px',
  };

  const focusHandler = e => {
    e.target.style.borderColor = '#C9A84C';
    e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)';
    e.target.style.background = 'rgba(255,255,255,0.06)';
  };
  const blurHandler = e => {
    e.target.style.borderColor = 'rgba(201,168,76,0.2)';
    e.target.style.boxShadow = 'none';
    e.target.style.background = 'rgba(255,255,255,0.04)';
  };

  return (
    <section id="order" style={{
      padding: 'clamp(80px, 10vw, 140px) 24px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        {/* Top Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', marginBottom: '60px' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase',
            color: '#C9A84C', fontFamily: 'Causten, Inter, sans-serif', fontWeight: '600',
          }}>Custom Orders</span>
          <h2 style={{
            fontFamily: 'Causten, Inter, sans-serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '900',
            color: '#F5F0E8',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            marginTop: '16px',
          }}>Place Your <span style={{
            background: 'linear-gradient(90deg, #9A7A2E, #E8C96A, #C9A84C, #E8C96A, #9A7A2E)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 4s linear infinite',
          }}>Order</span></h2>
          <p style={{
            color: 'rgba(245,240,232,0.5)',
            fontSize: '15px', marginTop: '16px',
            fontFamily: 'Causten, Inter, sans-serif',
            lineHeight: '1.7',
          }}>
            Fill out the form below and we'll get back to you within 24 hours to confirm your order.
          </p>
        </div>

        {status === 'sent' ? (
          <div style={{
            textAlign: 'center', padding: '60px 40px',
            background: 'rgba(22,22,22,0.9)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '12px',
          }}>
            <CheckCircle size={56} style={{ color: '#C9A84C', margin: '0 auto 20px' }} />
            <h3 style={{
              fontFamily: 'Causten, Inter, sans-serif', fontSize: '26px',
              fontWeight: '800', color: '#F5F0E8', marginBottom: '12px',
            }}>Order Received!</h3>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: '15px', fontFamily: 'Causten, Inter, sans-serif', lineHeight: '1.7' }}>
              Thank you! We've received your order request and will reach out to you shortly at the email provided.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-gold"
              style={{
                marginTop: '28px', padding: '14px 36px',
                borderRadius: '4px', border: 'none',
                cursor: 'pointer', fontSize: '13px',
                fontFamily: 'Causten, Inter, sans-serif',
              }}>
              Place Another Order
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            background: 'rgba(16,16,16,0.85)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '12px',
            padding: 'clamp(28px, 5vw, 52px)',
            backdropFilter: 'blur(20px)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input required name="name" value={form.name} onChange={handleChange}
                  style={inputStyle} placeholder="Your name"
                  onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange}
                  style={inputStyle} placeholder="your@email.com"
                  onFocus={focusHandler} onBlur={blurHandler} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange}
                  style={inputStyle} placeholder="(910) 000-0000"
                  onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label style={labelStyle}>Pick-up Date *</label>
                <input required type="date" name="date" value={form.date} onChange={handleChange}
                  style={{ ...inputStyle, colorScheme: 'dark' }}
                  onFocus={focusHandler} onBlur={blurHandler} />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>What Would You Like? *</label>
              <input required name="item" value={form.item} onChange={handleChange}
                style={inputStyle} placeholder="e.g. Custom birthday cake, dozen croissants..."
                onFocus={focusHandler} onBlur={blurHandler} />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>Additional Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange}
                rows={4} style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="Allergies, special requests, flavor preferences..."
                onFocus={focusHandler} onBlur={blurHandler} />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%', padding: '18px',
                borderRadius: '4px',
                border: '1px solid rgba(201,168,76,0.35)',
                background: 'transparent',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                fontSize: '13px', fontFamily: 'Causten, Inter, sans-serif',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                opacity: status === 'sending' ? 0.7 : 1,
                transition: 'all 0.3s ease',
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
              {status === 'sending' ? (
                <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
              ) : 'PLACE ORDER'}
            </button>

            {status === 'error' && (
              <p style={{
                textAlign: 'center', marginTop: '12px',
                fontSize: '13px', color: '#e74c3c',
                fontFamily: 'Causten, Inter, sans-serif',
              }}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <p style={{
              textAlign: 'center', marginTop: '16px',
              fontSize: '12px', color: 'rgba(245,240,232,0.35)',
              fontFamily: 'Causten, Inter, sans-serif',
            }}>
              Or email us directly at{' '}
              <a href="mailto:orders@ncbakelab.com" style={{ color: '#C9A84C', textDecoration: 'none' }}>
                orders@ncbakelab.com
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
