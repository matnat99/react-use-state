export default function Accordion({ title, description }) {
  return (
    <div className="accordion">
      <div className="accordion-title">
        <h3>{title}</h3>
        <button className="accordion-btn">+</button>
      </div>
      <div className="accordion-description">{description}</div>
    </div>
  );
}
