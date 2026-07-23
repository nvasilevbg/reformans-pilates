import Image from "next/image";
import { STUDIO_IMAGES, StudioImageKey } from "@/lib/images";

const DEFAULT_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNmM2U2ZTMiLz48L3N2Zz4=";

export interface StudioImageProps {
  imageKey?: StudioImageKey;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  fill?: boolean;
}

export default function StudioImage({
  imageKey,
  src,
  alt,
  width,
  height,
  aspectRatio,
  priority = false,
  sizes,
  className = "",
  style,
  onClick,
  fill = false,
}: StudioImageProps) {
  const item = imageKey ? STUDIO_IMAGES[imageKey] : null;

  const finalSrc = src ?? item?.src ?? "";
  const finalAlt = alt ?? item?.alt ?? "";
  const finalWidth = width ?? item?.width ?? 800;
  const finalHeight = height ?? item?.height ?? 600;
  const finalRatio = aspectRatio ?? item?.aspectRatio;

  const defaultSizes = sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  return (
    <div
      className={`studio-img-wrap ${className}`}
      onClick={onClick}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "inherit",
        aspectRatio: finalRatio,
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      <Image
        src={finalSrc}
        alt={finalAlt}
        width={fill ? undefined : finalWidth}
        height={fill ? undefined : finalHeight}
        fill={fill}
        priority={priority}
        sizes={defaultSizes}
        placeholder="blur"
        blurDataURL={DEFAULT_BLUR}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
