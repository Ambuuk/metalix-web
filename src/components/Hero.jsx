import { ArrowIcon } from '../icons';
import heroImage from '../assets/hero-image.png';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="gridlines"></div>
      <div className="hero-glow"></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow eyebrow">Металл хэвлэл</div>
          <h1>
            Хүссэн зургаа,
            <span className="thin">Металл</span>
            <span className="metal-text">дээр.</span>
          </h1>
          <p className="lead">
            Хамгийн сүүлийн үеийн технологийг ашиглан чанарын өндөр түвшинд хамгийн сайн металл дээр хэвлэх үйлчилгээ.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#gallery">Зургийн цомог харах <ArrowIcon /></a>
            <a className="btn btn-ghost" href="#pricing">Үнэ харах</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="n">70+</div>
              <div className="l">жилийн баталгаа</div>
            </div>
            <div className="stat">
              <div className="n">300 DPI</div>
              <div className="l">Өнгөний нягтаршил</div>
            </div>
            <div className="stat">
              <div className="n">24</div>
              <div className="l">Цагийн дотор бэлэн болно</div>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="plate-frame">
            <span className="corner tl"></span>
            <span className="corner tr"></span>
            <span className="corner bl"></span>
            <span className="corner br"></span>
            <img className="plate-img" src={heroImage} alt="Металл хэвлэл жишээ" />
            <div className="plate-tag">
              <span className="dot">&#9670;</span> МЕТАЛЛ &middot; 1.15ММ ЗУЗААН &middot; ФОТО ГАДАРГУУ
            </div>
          </div>
          <div className="hero-reflection"></div>
        </div>
      </div>
    </header>
  );
}
