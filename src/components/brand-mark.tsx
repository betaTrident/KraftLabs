type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="brand-lockup" role="img" aria-label="Kr4ftLabs">
      <svg
        className="brand-symbol"
        viewBox="0 0 42 48"
        aria-hidden="true"
      >
        <path d="M4 3h10v16L29 3h11L24 21l15 24H27L17 28l-3 3v14H4V3Z" />
        <path className="brand-bolt" d="m24 10-9 18h8l-4 15 15-22h-9l7-11h-8Z" />
      </svg>
      {compact ? null : (
        <span className="brand-wordmark" aria-hidden="true">
          Kr<span className="wordmark-bolt">4</span>ftLabs
        </span>
      )}
    </span>
  );
}
