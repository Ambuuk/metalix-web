import { useState } from 'react';
import { ArrowIcon } from '../icons';

export default function CTA() {
  const [sent, setSent] = useState(false);

  return (
    <section className="cta-banner section-pad" id="quote">
      <div className="wrap">
        <div className="cta-inner">
          <div className="glow"></div>
          <div className="eyebrow center" style={{ position: 'relative', justifyContent: 'center', marginBottom: 22 }}>
            Start a Print
          </div>
          <h2>Let&rsquo;s Forge <span className="metal-text">Yours.</span></h2>
          <p>Drop your email and we&rsquo;ll send a finish sample kit plus a quote within one business day.</p>
          <form className="cta-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            {sent ? (
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', padding: '16px 0' }}>
                &#9670; Request received &mdash; check your inbox shortly.
              </div>
            ) : (
              <>
                <input type="email" required placeholder="you@studio.com" />
                <button className="btn btn-primary" type="submit">Request Kit <ArrowIcon /></button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
