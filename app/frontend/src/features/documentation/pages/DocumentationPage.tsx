import { useEffect, useState } from "react";

import { getDocumentationCategories } from "../services/documentationService";
import type { DocumentationCategory } from "../types/documentation";

export default function DocumentationPage() {
  const [categories, setCategories] = useState<DocumentationCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getDocumentationCategories();
        setCategories(data);
      } catch {
        setError("Failed to load documentation categories.");
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  if (loading) {
    return <p>Loading documentation...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (categories.length === 0) {
  return (
    <>
      <h1>Documentation</h1>
      <p>No documentation categories available.</p>
    </>
  );
}

  return (
    <>
      <h1>Documentation</h1>

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
