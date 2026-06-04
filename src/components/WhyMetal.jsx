import { SunIcon, ShieldIcon, LayersIcon, DropIcon, SparkIcon, RulerIcon } from '../icons';

const WHY = [
  { Icon: SunIcon, t: "Өнгөний нягтаршил", d: "Sublimated dye sits beneath a glossy coat, so light passes in and bounces back — colors glow like a backlit screen." },
  { Icon: ShieldIcon, t: "Олон жилийн баталгаа", d: "Waterproof, UV-stable and scratch-resistant. Wipe it, hang it in the kitchen, leave it in the sun for a century." },
  { Icon: LayersIcon, t: "Жааз, хүрээ хийх шаардлагагүй", d: "The aluminum is the artwork. Float mounts hold it off the wall — a clean, frameless, modern edge." },
  { Icon: DropIcon, t: "Ориг өнгийг сайн хадгална", d: "Deeper shadow detail than paper or canvas can hold, with a dynamic range that paper simply can't reach." },
  { Icon: SparkIcon, t: "4 тал нь мөлгөр", d: "Choose high-gloss, satin matte, brushed silver, or mirror white — each changes how the metal carries light." },
  { Icon: RulerIcon, t: "Хэмжээний сонголт", d: "From 8″ desk pieces to 48″ statement walls, sublimated in-house on calibrated presses." },
];

export default function WhyMetal() {
  return (
    <section className="why section-pad" id="why">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-index">02 &mdash; Яагаад металл гэж</div>
          <h2>Цаас үрчийнэ. <span className="metal-text">Металл мөнх.</span></h2>
          <p className="sub">
            Та яагаад металл хэвлэл гэртээ, найз нөхөддөө, ажлын хамт олондоо бэлэглэх ёстой 6 шалтгаан.
          </p>
        </div>
        <div className="why-grid">
          {WHY.map(({ Icon, t, d }, i) => (
            <div className="why-card reveal" key={i}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <div className="ic"><Icon /></div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
