import { useState, useEffect } from 'react';
import { ArrowIcon } from '../icons';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <a className="brand" href="#top">
        <span className="mark"></span>METALIX
      </a>
      <div className="nav-links">
        <a href="#gallery">Зургийн цомог</a>
        <a href="#why">Яагаад металл гэж</a>
        {/* <a href="#process">Process</a> */}
        <a href="#pricing">Үнэ</a>
      </div>
      <div className="nav-cta">
        <a className="btn btn-ghost" href="https://www.facebook.com/profile.php?id=61587875326590">Мэдээлэл авах <ArrowIcon /></a>
      </div>
    </nav>
  );
}
