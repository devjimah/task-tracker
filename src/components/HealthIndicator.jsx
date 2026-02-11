import { useState, useEffect } from 'react';
import { logger } from '../utils/logger';

/**
 * HealthIndicator component — displays the application health status.
 * Shows uptime, render time, and current status.
 * Acts as a simple "health endpoint" for the client-side app.
 */
export default function HealthIndicator() {
  const [uptime, setUptime] = useState(0);
  const [status] = useState('healthy');

  useEffect(() => {
    logger.info('HealthIndicator mounted — app is running');
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
      logger.info('HealthIndicator unmounted');
    };
  }, []);

  return (
    <div className="health-indicator">
      Status: <strong>{status}</strong> | Uptime: {uptime}s | Rendered at:{' '}
      {new Date().toLocaleTimeString()}
    </div>
  );
}
