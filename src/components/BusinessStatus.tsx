'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const HOURS: Record<number, [number, number, number, number] | null> = {
  0: null,            // Sunday — Closed
  1: [8, 30, 18, 0],  // Mon 8:30 AM – 6:00 PM
  2: [8, 30, 18, 0],
  3: [8, 30, 18, 0],
  4: [8, 30, 18, 0],
  5: [8, 30, 18, 0],
  6: [8, 30, 14, 0],  // Sat 8:30 AM – 2:00 PM
};

function getNJTime(): Date {
  return new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
  );
}

export default function BusinessStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; label: string } | null>(null);

  useEffect(() => {
    function check() {
      const now = getNJTime();
      const day = now.getDay();
      const schedule = HOURS[day];

      if (!schedule) {
        setStatus({ isOpen: false, label: 'Closed · Opens Mon 8:30 AM' });
        return;
      }

      const [oh, om, ch, cm] = schedule;
      const current = now.getHours() * 60 + now.getMinutes();
      const open = oh * 60 + om;
      const close = ch * 60 + cm;

      if (current >= open && current < close) {
        const remaining = close - current;
        if (remaining <= 60) {
          setStatus({ isOpen: true, label: `Open · Closes in ${remaining} min` });
        } else {
          const closeStr = `${ch > 12 ? ch - 12 : ch}:${String(cm).padStart(2, '0')} PM`;
          setStatus({ isOpen: true, label: `Open · Closes ${closeStr}` });
        }
      } else if (current < open) {
        const openStr = `${oh > 12 ? oh - 12 : oh}:${String(om).padStart(2, '0')} AM`;
        setStatus({ isOpen: false, label: `Closed · Opens ${openStr}` });
      } else {
        if (day === 6) {
          setStatus({ isOpen: false, label: 'Closed · Opens Mon 8:30 AM' });
        } else {
          setStatus({ isOpen: false, label: 'Closed · Opens Tomorrow 8:30 AM' });
        }
      }
    }

    check();
    const interval = setInterval(check, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
        status.isOpen
          ? 'bg-green-500/10 text-green-400'
          : 'bg-red-500/10 text-red-400'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status.isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'
        }`}
      />
      <Clock className="h-3 w-3" />
      {status.label}
    </span>
  );
}
