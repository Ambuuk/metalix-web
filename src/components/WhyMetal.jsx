import { SunIcon, ShieldIcon, LayersIcon, DropIcon, SparkIcon, RulerIcon } from '../icons';

const WHY = [
  { Icon: SunIcon, t: "Өнгөний нягтаршил", d: "Хамгийн сүүлийн үеийн принтер болон хор ашиглан тусгайлан хэвлэдэг." },
  { Icon: ShieldIcon, t: "Олон жилийн баталгаа", d: "70+ жил өнгөө алдахгүй, норохгүй, үрчийхгүй." },
  { Icon: LayersIcon, t: "Жааз, хүрээ хийх шаардлагагүй", d: "1.15мм тул ямар ч хүрээ хийх шаардлагагүй. Тоос дарахгүй, цэвэрлэхэд хялбар." },
  { Icon: DropIcon, t: "Ориг өнгийг алдалгүй гаргана", d: "Таны өгсөн зургийн чанарыг сайжруулж, өнгө дүрсийг алдалгүй гаргана." },
  { Icon: SparkIcon, t: "4 тал нь мөлгөр", d: "Металлын 4 тал нь мөлгөр тул хүүхдэд ээлтэй, аюулгүй." },
  { Icon: RulerIcon, t: "Хэмжээний сонголт", d: "4 төрлийн стандард хэмжээнээс сонгох боломжтой." },
];

export default function WhyMetal() {
  return (
    <section className="why section-pad" id="why">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-index">02 &mdash; Яагаад металл гэж</div>
          <h2>Цаас үрчийнэ. <br></br><span className="metal-text">Металл мөнх.</span></h2>
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
