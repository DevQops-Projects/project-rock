import apiClient from "../../../api/apiClient";
import type { HealthResponse } from "../types/health";

export async function getHealth(): Promise<HealthResponse> {
  const response = await apiClient.get<HealthResponse>("/health");

  return response.data;
}
