import React, { useEffect, useState } from 'react';

export interface BarChartDatum {
  label: string;
  value: number;
  highlight?: boolean;
}

interface BarChartProps {
  data: BarChartDatum[];
  formatValue: (value: number) => string;
}

// Label + value sit on their own line above a full-width progress-bar track
// (not beside a narrower bar) — this is the one bar style a generic
// WordPress "progress bar" widget can reproduce, so the dashboard's charts
// are built to that same shape rather than a bespoke three-column layout.
// Bars grow left-to-right on mount/tab-switch (per design spec) by toggling
// width from 0% to target % one frame after mount; remount via the parent's
// `key` prop replays the animation on tab change.
export const BarChart: React.FC<BarChartProps> = ({ data, formatValue }) => {
  const [grown, setGrown] = useState(false);
  const max = Math.max(...data.map((d) => d.value), 1);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col gap-5 sm:gap-6 w-full">
      {data.map((d, i) => {
        const pct = (d.value / max) * 100;
        const color = d.highlight ? 'var(--color-orange)' : 'var(--color-cta)';
        return (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm sm:text-base font-bold text-[var(--color-ink)]">{d.label}</span>
              <span className="text-sm sm:text-lg font-extrabold tracking-tight text-[var(--color-ink)]">
                {formatValue(d.value)}
              </span>
            </div>
            <div className="relative w-full h-2.5 sm:h-3 bg-slate-100 overflow-hidden">
              <div
                className="h-full transition-[width] duration-700 ease-out"
                style={{ width: grown ? `${pct}%` : '0%', backgroundColor: color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
