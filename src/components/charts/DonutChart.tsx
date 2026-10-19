import React from 'react';
import { motion } from 'motion/react';

export interface DonutChartDatum {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DonutChartDatum[];
}

const SIZE = 180;
const STROKE = 24;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
// Segments meet edge-to-edge by default, but two flat-capped arcs of
// different colors landing on the exact same angle leave a visible
// anti-aliased hairline (reads as a notch bitten out of the ring). Drawing
// each segment slightly long — overlapping into the next one, which paints
// on top of it — hides that seam entirely; at this radius 1.5 units is a
// fraction of a degree, imperceptible as color bleed.
const SEAM_OVERLAP = 1.5;

// Hand-rolled SVG donut chart. Segments render at their final geometry
// immediately (each one's own stroke-dasharray/offset is only ever correct
// at the end state) and the whole ring fades/scales in as a single unit on
// mount instead of growing segment-by-segment — independently-timed
// per-segment growth could be caught mid-transition (e.g. right after a tab
// switch) showing a temporarily mismatched, notched-looking ring. No center
// label by design — callers show the total value/label beside or below the
// chart instead, since text crammed into the donut's hole reads poorly at
// this size.
export const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  let cumulative = 0;

  return (
    <motion.div
      className="relative shrink-0"
      style={{ width: SIZE, height: SIZE }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="-rotate-90 absolute inset-0">
        <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} fill="none" stroke="#f1f5f9" strokeWidth={STROKE} />
        {data.map((d, i) => {
          const fraction = total > 0 ? d.value / total : 0;
          const segmentLength = fraction * CIRCUMFERENCE;
          const dashOffset = -cumulative;
          cumulative += segmentLength;
          const drawLength = Math.min(segmentLength + SEAM_OVERLAP, CIRCUMFERENCE);
          return (
            <circle
              key={i}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              strokeWidth={STROKE}
              strokeDasharray={`${drawLength} ${CIRCUMFERENCE - drawLength}`}
              strokeDashoffset={dashOffset}
              style={{ stroke: d.color }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
};
