import type { CSSProperties } from "react";

const EMBERS = [
  [4, 5, 7.2, -1.3, 24], [10, 3, 5.8, -4.1, -18], [17, 7, 8.4, -2.7, 32],
  [24, 4, 6.5, -5.2, -26], [31, 6, 7.8, -0.8, 18], [38, 3, 5.5, -3.4, -12],
  [45, 5, 8.8, -6.1, 29], [52, 7, 6.9, -2.1, -24], [59, 4, 7.5, -4.8, 15],
  [66, 6, 5.9, -1.6, -31], [72, 3, 8.1, -5.7, 22], [78, 8, 6.3, -3.1, -20],
  [84, 4, 7.9, -0.4, 28], [90, 6, 5.6, -4.5, -16], [95, 3, 8.6, -2.4, 12],
  [13, 5, 9.1, -7.2, 34], [48, 4, 7.1, -6.8, -27], [87, 5, 8.3, -7.6, 19],
] as const;

export function EmberField({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const particles = compact ? EMBERS.slice(0, 10) : EMBERS;

  return (
    <div className={`ember-field ${className}`.trim()} aria-hidden="true">
      {particles.map(([left, size, duration, delay, drift], index) => (
        <span
          className="ember-field__ember"
          key={`${left}-${index}`}
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${Math.max(size * 1.7, 6)}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            "--ember-drift": `${drift}px`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
