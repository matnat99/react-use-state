import { useState } from "react";

export default function Accordion({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="accordion">
      <div className={`accordion-title ${isOpen ? "open" : ""}`}>
        <h3>{title}</h3>
        <button className="accordion-btn" onClick={toggleAccordion}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <div className="accordion-description">{description}</div>}
    </div>
  );
}
