import { useInView } from '../hooks/useInView';

// Matches Bolt.eu's "About us" band exactly: an eyebrow label, one huge
// full-bleed statement headline, a short paragraph, and a single pill button —
// all centered, all on a solid brand-color background. Bolt's is green;
// Twedot's brand color is purple.
export default function FeaturesSection() {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(160deg, #7c3aed 0%, #4c1d95 100%)',
        padding: 'clamp(80px, 11vw, 140px) 24px',
        textAlign: 'center',
      }}
    >
      <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`} style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 22 }}>
          About us
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 6vw, 68px)', fontWeight: 800, color: '#fff', lineHeight: 1.05, marginBottom: 26 }}>
          Twedot is the open network for people and businesses.
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 620, margin: '0 auto 36px' }}>
          Connect with friends and family, discover people and businesses around you and worldwide.
          Do business while staying social — see what your friends are up to, what they offer,
          and what's happening in your city. All of it, in one place.
        </p>
        <a
          href="/about"
          style={{
            display: 'inline-block', background: '#fff', color: '#0a0010',
            fontWeight: 700, fontSize: 15, padding: '15px 32px', borderRadius: 10,
            textDecoration: 'none', transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = ''}
        >
          Our mission
        </a>
      </div>
    </section>
  );
}
