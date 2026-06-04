const ITEMS = ["Гэр бүлийн зураг", "Кино, анимэ постер", "Интерьер дизайн", "Байгууллагын зураг", "Ресторан", "Үйлчилгээний байгууллага", "Спортын зураг", "Гэрэл зураг"];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}
