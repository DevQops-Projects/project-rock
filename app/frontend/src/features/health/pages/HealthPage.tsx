import { useEffect, useState } from "react";

import { getHealth } from "../services/healthService";
import type { HealthResponse } from "../types/health";

export default function HealthPage() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  
async function loadHealth() {
  setLoading(true);  
  try {
    const data = await getHealth();
    setHealth(data);
    setLastChecked(new Date());
    setError(null);
  } catch {
    setError("Unable to retrieve system health.");
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
  loadHealth();

  const interval = setInterval(loadHealth, 30000);

  return () => clearInterval(interval);
}, []);

  if (loading) {
    return (
      <>
        <h1>❤️ System Health</h1>
        <p>Loading system status...</p>
      </>
    );
  }

  if (error) {
  return (
    <>
      <h1>System Health</h1>

      <p>{error}</p>

      <button onClick={loadHealth}>
        Retry
      </button>
    </>
  );
}

  if (!health) {
    return (
      <>
        <h1>❤️ System Health</h1>
        <p>No health information available.</p>
      </>
    );
  }

  return (
  <>
    <h1>❤️ System Health</h1>

    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        maxWidth: "500px",
      }}
    >
      <p>
        <strong>🟢 Status:</strong> {health.status}
      </p>

      <p>
        <strong>📦 Service:</strong> {health.service}
      </p>

      <p>
        <strong>🏷 Version:</strong> {health.version}
      </p>

      <p>
        <strong>🌍 Environment:</strong> {health.environment}
      </p>

      <p>
        <strong>🕒 Last Checked:</strong>{" "}
        {lastChecked?.toLocaleTimeString() ?? "-"}
        </p>
    </div>
  </>
 );
}
