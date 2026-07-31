import apiClient from "../../../api/apiClient";
import type { DocumentationCategory } from "../types/documentation";

export async function getDocumentationCategories(): Promise<DocumentationCategory[]> {
  const response = await apiClient.get<DocumentationCategory[]>(
    "/documentation/categories"
  );

  return response.data;
}
