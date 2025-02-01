import languages from "../data/languagesData";
import Accordion from "./Accordion";

export default function AccordionList() {
  return (
    <div className="accordion-list">
      {languages.map((language, id) => {
        return (
          <Accordion
            key={id}
            title={language.title}
            description={language.description}
          />
        );
      })}
    </div>
  );
}
