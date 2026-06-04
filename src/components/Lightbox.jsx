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
          <div className="lb-img img-placeholder">{piece.title}</div>
          <div className="lb-info">
            <div className="c">{piece.cat} &middot; {piece.edition}</div>
            <h3>{piece.title}</h3>
            <p>
              Direct dye-sublimation onto coated aluminum. The image lives inside the metal, not on it
              &mdash; giving impossible depth, true blacks, and a surface you can wipe clean for a lifetime.
            </p>
            <div className="lb-specs">
              <div className="s"><div className="k">Dimensions</div><div className="v">{piece.size}</div></div>
              <div className="s"><div className="k">Finish</div><div className="v">{piece.finish}</div></div>
              <div className="s"><div className="k">Mount</div><div className="v">Float</div></div>
              <div className="s"><div className="k">Edition</div><div className="v">{piece.edition}</div></div>
            </div>
            <a
              className="btn btn-primary"
              href="#quote"
              style={{ marginTop: 28, justifyContent: 'center' }}
              onClick={onClose}
            >
              Order this Finish <ArrowIcon />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
