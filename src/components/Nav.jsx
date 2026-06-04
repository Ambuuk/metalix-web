import { useState, useEffect } from 'react';
import { ArrowIcon } from '../icons';
import logo from '../assets/logo-no-bg.png';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
        <a className="brand" href="#top">
          <img src={logo} alt="Metalix" className="brand-logo" /> Металикс
        </a>
        <div className="nav-links">
          <a href="#gallery">Зургийн цомог</a>
          <a href="#why">Яагаад металл гэж</a>
          <a href="#pricing">Үнэ</a>
        </div>
        <div className="nav-cta">
          <a className="btn btn-ghost" href="https://www.facebook.com/profile.php?id=61587875326590">Мэдээлэл авах <ArrowIcon /></a>
          <button
            className={'hamburger' + (menuOpen ? ' open' : '')}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#gallery" onClick={closeMenu}>Зургийн цомог</a>
          <a href="#why" onClick={closeMenu}>Яагаад металл гэж</a>
          <a href="#pricing" onClick={closeMenu}>Үнэ</a>
          <a className="btn btn-ghost mobile-menu-cta" href="https://www.facebook.com/profile.php?id=61587875326590" onClick={closeMenu}>Мэдээлэл авах <ArrowIcon /></a>
        </div>
      )}
    </>
  );
}
