import { useEffect, useState } from "react";

import { getDocumentationCategories } from "../services/documentationService";
import type { DocumentationCategory } from "../types/documentation";

export default function DocumentationPage() {
  const [categories, setCategories] = useState<DocumentationCategory[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await getDocumentationCategories();
      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <>
      <h1>Documentation - DEVQ029 TEST</h1>

      {categories.map((category) => (
        <div
          key={category.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </>
  );
}
