import { useEffect, useState } from "react";

export default function StatsCard({ value, label, color }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 600;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className={`card ${color}`}>
      <div className="card-value">
        {String(display).padStart(2, "0")}
      </div>
      <div className="card-label">{label}</div>
    </div>
  );
}
