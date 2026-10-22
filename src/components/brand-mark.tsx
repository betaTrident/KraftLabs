import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
  theme?: "dark" | "light";
};

export function BrandMark({ compact = false, theme = "dark" }: BrandMarkProps) {
  const imageKind = compact ? "symbol" : "wordmark";
  const width = compact ? 512 : 720;
  const height = compact ? 512 : theme === "dark" ? 132 : 133;

  return (
    <span className="brand-lockup">
      <Image
        className={compact ? "brand-symbol-image" : "brand-wordmark-image"}
        src={`/brand/${imageKind}-${theme}.webp`}
        width={width}
        height={height}
        alt="Kr4ftLabs"
        unoptimized
      />
    </span>
  );
}
