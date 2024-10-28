import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem, title) => (
          <CoreConcept key={title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
