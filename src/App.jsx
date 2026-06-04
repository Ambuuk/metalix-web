import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';
import WhyMetal from './components/WhyMetal';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

import './styles/styles.css';
import './styles/components.css';

export default function App() {
  const [selectedPiece, setSelectedPiece] = useState(null);

  useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')];

    const reveal = (el, animate) => {
      if (el.dataset.revealed) return;
      el.dataset.revealed = '1';
      if (!animate) el.style.transition = 'none';
      const idx = [...el.parentNode.children].indexOf(el);
      el.style.transitionDelay = (idx % 4) * 80 + 'ms';
      el.classList.add('in');
      el.style.opacity = '1';
      el.style.transform = 'none';
    };

    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { reveal(e.target, true); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      els.forEach((el) => io.observe(el));
    }

    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) reveal(el, true);
      });
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);

    const timer = setTimeout(() => els.forEach((el) => reveal(el, false)), 1200);

    return () => {
      if (io) io.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Gallery onOpen={setSelectedPiece} />
      <WhyMetal />
      {/* <Process /> */}
      <Pricing />
      {/* <CTA /> */}
      <Footer />
      <Lightbox piece={selectedPiece} onClose={() => setSelectedPiece(null)} />
      <div className="grain"></div>
      <div className="vignette"></div>
    </>
  );
}
