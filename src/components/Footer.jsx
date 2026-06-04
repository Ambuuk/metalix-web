import logo from '../assets/logo-no-bg.png';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top"><img src={logo} alt="Metalix" className="brand-logo" /></a>
            <p>Олон үе дамжин хэрэглэгдэх металл хэвлэлийн үйлчилгээ. Та хүссэн зургаа хэвлүүлээрэй.</p>
          </div>
          <div className="foot-col">
            <h4>Агуулга</h4>
            <a href="#gallery">Зургийн цомог</a>
            <a href="#why">Яагаад металл гэж</a>
            {/* <a href="#process">Process</a> */}
            <a href="#pricing">Үнэ</a>
          </div>
          {/* <div className="foot-col">
            <h4>Service</h4>
            <a href="#quote">Get a Quote</a>
            <a href="#quote">Sample Kit</a>
            <a href="#quote">Trade Program</a>
            <a href="#quote">Installation</a>
          </div> */}
          {/* <div className="foot-col">
            <h4>Studio</h4>
            <a href="#">About</a>
            <a href="#">Editions</a>
            <a href="#">Care Guide</a>
            <a href="#">Contact</a>
          </div> */}
        </div>
        <div className="foot-bottom">
          <p>&copy; 2026 Metalix металл хэвлэл &mdash; Чанарыг таны гэрт.</p>
          <div className="foot-social">
            <a href="#" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" aria-label="Behance">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 7h5a2.5 2.5 0 010 5H3zM3 12h5.5a2.5 2.5 0 010 5H3zM15 9h6M14 14h7a3 3 0 00-6 0 3 3 0 003 3"/>
              </svg>
            </a>
            <a href="#" aria-label="Mail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="M3 7l9 6 9-6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
