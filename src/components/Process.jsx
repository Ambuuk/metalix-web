import { STEPS } from '../data/content';

export default function Process() {
  return (
    <section className="process section-pad" id="process">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-index">03 &mdash; The Process</div>
          <h2>From File <span className="metal-text">to Forged.</span></h2>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step reveal" key={s.n}>
              <span className="pulse"></span>
              <div className="sn">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
