import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-23T09:00:00").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms / 3600000) % 24);
  const minutes = Math.floor((ms / 60000) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const labels: { key: keyof ReturnType<typeof diff>; label: string }[] = [
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];

export function Countdown() {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-primary">
        // event_date
      </p>
      <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
        23 de Julho de 2026
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {labels.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-glow)]"
          >
            <div className="font-mono text-4xl font-bold text-primary sm:text-5xl">
              {String(t[key]).padStart(2, "0")}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}