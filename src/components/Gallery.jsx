import { useState } from 'react';
import { ExpandIcon } from '../icons';
import { PIECES, CATS, SPAN_STYLE } from '../data/content';
import g1 from '../assets/gallery-1.png';
import g2 from '../assets/gallery-2.png';
import g3 from '../assets/gallery-3.png';
import g4 from '../assets/gallery-4.png';
import g5 from '../assets/gallery-5.png';
import g6 from '../assets/gallery-6.png';
import g7 from '../assets/gallery-7.png';

const GALLERY_IMGS = [g1, g2, g3, g4, g5, g6, g7];

export default function Gallery({ onOpen }) {
  const [cat, setCat] = useState('all');

  return (
    <section className="gallery section-pad" id="gallery">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-index">01 &mdash; Зургийн цомог</div>
          <h2>Олон жилийн <span className="metal-text">баталгаа</span></h2>
          <p className="sub">
            Бүх зургийн чанарыг сайжруулж, хамгийн сайн материалаар хэвлэсэн. Хананд шууд өлгөхөд бэлэн.
          </p>
        </div>

        <div className="filters">
          {CATS.map((c) => (
            <button
              key={c.k}
              className={'filter' + (cat === c.k ? ' active' : '')}
              onClick={() => setCat(c.k)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid-gallery">
          {PIECES.map((p, i) => {
            const show = cat === 'all' || p.cat === cat;
            return (
              <div
                key={p.id}
                className={'tile' + (show ? '' : ' hide')}
                style={SPAN_STYLE[p.span]}
                onClick={() => onOpen({ ...p, img: GALLERY_IMGS[i % GALLERY_IMGS.length] })}
              >
                <img className="tile-img" src={GALLERY_IMGS[i % GALLERY_IMGS.length]} alt={p.title} />
                <div className="sweep"></div>
                <div className="expand"><ExpandIcon /></div>
                <div className="meta">
                  <div className="c">{p.cat} &middot; {p.size}</div>
                  <div className="t">{p.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
