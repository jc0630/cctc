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

// Hand-rolled horizontal bar chart — no charting library needed for a handful
// of year-over-year metrics. Bars grow left-to-right on mount/tab-switch
// (per design spec) by toggling width from 0% to target % one frame after
// mount; remount via the parent's `key` prop replays the animation on tab change.
export const BarChart: React.FC<BarChartProps> = ({ data, formatValue }) => {
  const [grown, setGrown] = useState(false);
  const max = Math.max(...data.map((d) => d.value), 1);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col gap-4 sm:gap-5 w-full">
      {data.map((d, i) => {
        const pct = (d.value / max) * 100;
        const color = d.highlight ? 'var(--color-orange)' : 'var(--color-cta)';
        return (
          <div key={i} className="flex items-center gap-3 sm:gap-4">
            <span className="w-12 sm:w-14 shrink-0 text-sm sm:text-base font-bold text-[var(--color-ink)]">
              {d.label}
            </span>
            <div className="relative flex-1 h-5 sm:h-6 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-[width] duration-700 ease-out"
                style={{ width: grown ? `${pct}%` : '0%', backgroundColor: color }}
              />
            </div>
            <span className="w-24 sm:w-28 shrink-0 text-right text-sm sm:text-lg font-extrabold tracking-tight text-[var(--color-ink)]">
              {formatValue(d.value)}
            </span>
          </div>
        );
      })}
    </div>
  );
};
