import { CheckIcon, ArrowIcon } from '../icons';
import { TIERS } from '../data/content';

export default function Pricing() {
  return (
    <section className="pricing section-pad" id="pricing">
      <div className="gridlines"></div>
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="sec-head center">
          <div className="sec-index">04 &mdash; Үнийн мэдээлэл</div>
          <h2>Үнийн мэдээлэл</h2>
          <p className="sub">
            Манай дээр хэвлэгдэж байгаа хэмжээ болон үнийн мэдээлэл. Бүх захиалгад ширээний тогтоогч аль эсвэл хананд өлгөх соронз дагалдана.
          </p>
        </div>
        <div className="price-grid">
          {TIERS.map((t) => (
            <div className={'price-card reveal' + (t.feat ? ' feat' : '')} key={t.tier}>
              {t.feat && <span className="badge">Хамгийн их захиалагддаг</span>}
              <div className="tier">{t.tier}</div>
              <div className="desc">{t.desc}</div>
              <div className="amt">
                <span className="cur">{t.cur}</span>
                <span className="val">{t.val}</span>
                {t.per && <span className="per">{t.per}</span>}
              </div>
              <div className="from">{t.from}</div>
              <ul>
                {t.feats.map((f, i) => (
                  <li key={i}><CheckIcon /><span>{f}</span></li>
                ))}
              </ul>
              <a className={'btn ' + 'btn-ghost'} href="https://www.facebook.com/profile.php?id=61587875326590">
                {t.cta} <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
