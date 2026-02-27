import { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: 'Tiffany M.', text: 'Bake Lab never disappoints! The custom cake for my daughter\'s birthday was absolutely stunning and tasted even better than it looked.', stars: 5 },
  { name: 'Marcus J.', text: 'Best bakery in the area, hands down. The croissants are flaky perfection every single time. I drive from Raleigh just to come here!', stars: 5 },
  { name: 'Shayla R.', text: 'Ordered a custom wedding cake and was blown away. They really take the time to understand your vision. Will definitely order again!', stars: 5 },
  { name: 'David P.', text: 'The cinnamon rolls are out of this world. Fresh every morning and the staff is incredibly friendly. Bake Lab is a true gem.', stars: 5 },
  { name: 'Keisha T.', text: 'I\'ve tried so many bakeries and nothing compares. The attention to detail in every item is incredible. A must-visit in Lillington!', stars: 5 },
  { name: 'Anthony B.', text: 'Amazing experience from order to pickup. They kept me updated, the cookies were beautiful, and the flavors were unreal. 10/10!', stars: 5 },
  { name: 'Nadia W.', text: 'Placed a last-minute birthday cake order and they came through beautifully. The team at Bake Lab truly cares about their customers.', stars: 5 },
  { name: 'Jordan F.', text: 'The sourdough is next level. I look forward to picking it up every week. Bake Lab has completely changed my morning routine.', stars: 5 },
];

function StarRow() {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={14} fill="#C9A84C" style={{ color: '#C9A84C' }} />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div style={{
      background: 'rgba(20,20,20,0.85)',
      border: '1px solid rgba(201,168,76,0.15)',
      borderRadius: '10px',
      padding: '28px 32px',
      minWidth: '300px',
      maxWidth: '340px',
      flexShrink: 0,
      backdropFilter: 'blur(10px)',
    }}>
      <StarRow />
      <p style={{
        color: 'rgba(245,240,232,0.75)',
        fontSize: '14px',
        lineHeight: '1.75',
        fontFamily: 'Causten, Inter, sans-serif',
        marginTop: '14px',
        marginBottom: '18px',
        fontStyle: 'italic',
      }}>
        "{review.text}"
      </p>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
      }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #9A7A2E, #C9A84C)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '14px', fontWeight: '800',
          color: '#0A0A0A', fontFamily: 'Causten, Inter, sans-serif',
          flexShrink: 0,
        }}>
          {review.name[0]}
        </div>
        <div>
          <div style={{
            fontSize: '13px', fontWeight: '700',
            color: '#F5F0E8', fontFamily: 'Causten, Inter, sans-serif',
          }}>{review.name}</div>
          <div style={{
            fontSize: '11px', color: 'rgba(201,168,76,0.6)',
            fontFamily: 'Causten, Inter, sans-serif',
            letterSpacing: '0.05em',
          }}>Verified Customer</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  // Duplicate reviews for seamless loop
  const allReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" style={{
      padding: 'clamp(80px, 10vw, 140px) 0',
      position: 'relative', zIndex: 1, overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px', padding: '0 24px' }}>
        <span style={{
          fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase',
          color: '#C9A84C', fontFamily: 'Causten, Inter, sans-serif', fontWeight: '600',
        }}>What Our Customers Say</span>
        <h2 style={{
          fontFamily: 'Causten, Inter, sans-serif',
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: '900',
          color: '#F5F0E8',
          letterSpacing: '-0.02em',
          lineHeight: '1.1',
          marginTop: '16px',
        }}>Made With Love,<br /><span className="gold-shimmer">Remembered Forever</span></h2>
      </div>

      {/* Scrolling track */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to right, #0A0A0A, transparent)',
          pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to left, #0A0A0A, transparent)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex',
          gap: '20px',
          animation: 'marqueeScroll 80s linear infinite',
          width: 'max-content',
          padding: '8px 0 16px',
          willChange: 'transform',
        }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
        >
          {allReviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* Facebook CTA */}
      <div style={{ textAlign: 'center', marginTop: '48px', padding: '0 24px' }}>
        <a
          href="https://www.facebook.com/ncbakelab"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            color: '#C9A84C', textDecoration: 'none',
            fontSize: '13px', fontFamily: 'Causten, Inter, sans-serif',
            fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid rgba(201,168,76,0.3)',
            padding: '12px 28px', borderRadius: '4px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
            e.currentTarget.style.borderColor = '#C9A84C';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A84C">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Follow us on Facebook
        </a>
      </div>
    </section>
  );
}