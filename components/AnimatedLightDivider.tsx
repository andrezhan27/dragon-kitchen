type AnimatedLightDividerProps = {
  variant?: "default" | "ornamental";
  className?: string;
};

export function AnimatedLightDivider({
  variant = "default",
  className = "",
}: AnimatedLightDividerProps) {
  return (
    <div
      className={`animated-light-divider animated-light-divider--${variant} ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="animated-light-divider__base" />
      <span className="animated-light-divider__sweep">
        <span className="animated-light-divider__flare" />
      </span>
    </div>
  );
}
