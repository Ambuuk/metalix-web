import { useEffect } from 'react';
import { ArrowIcon } from '../icons';

export default function Lightbox({ piece, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={'lightbox' + (piece ? ' open' : '')} onClick={onClose}>
      {piece && (
        <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
          <button className="lb-close" onClick={onClose} aria-label="Close">&#10005;</button>
          <img className="lb-img" src={piece.img} alt={piece.title} />
          <div className="lb-info">
            <div className="c">{piece.cat} &middot; {piece.edition}</div>
            <h3>{piece.title}</h3>
            <p>
              Сублимаци технологиор металл дээр хэвлэсэн зураг.
              &mdash; Насан туршдаа хадгалах чанартай хэвлэл.
            </p>
            <div className="lb-specs">
              <div className="s"><div className="k">Хэмжээ</div><div className="v">{piece.size}</div></div>
              <div className="s"><div className="k">Загвар</div><div className="v">{piece.finish}</div></div>
              <div className="s"><div className="k">Тогтоогч</div><div className="v">Соронз</div></div>
              <div className="s"><div className="k">Edition</div><div className="v">{piece.edition}</div></div>
            </div>
            {/* <a
              className="btn btn-primary"
              href="#quote"
              style={{ marginTop: 28, justifyContent: 'center' }}
              onClick={onClose}
            >
              Order this Finish <ArrowIcon />
            </a> */}
          </div>
        </div>
      )}
    </div>
  );
}
