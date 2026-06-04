import { useState } from 'react';
import { ExpandIcon } from '../icons';
import { PIECES, CATS, SPAN_STYLE } from '../data/content';

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
          {PIECES.map((p) => {
            const show = cat === 'all' || p.cat === cat;
            return (
              <div
                key={p.id}
                className={'tile' + (show ? '' : ' hide')}
                style={SPAN_STYLE[p.span]}
                onClick={() => onOpen(p)}
              >
                <div className="tile-img img-placeholder">{p.title}</div>
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
