import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// A photo slot. If public/images/<name>.jpg (or .jpeg) exists it is rendered through next/image
// (resized, AVIF/WebP, lazy-loaded). If it does not, the slot shows the contour texture,
// or nothing at all when fallback is "none". See IMAGES.md for the list of slots.
function photoFile(name: string) {
  for (const ext of ["jpg", "jpeg"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", `${name}.${ext}`))) return `/images/${name}.${ext}`;
  }
  return null;
}

export function hasPhoto(name: string) {
  return photoFile(name) !== null;
}

type Props = {
  name: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallback?: "contours" | "none";
  alt2?: boolean;
};

export function Photo({ name, alt, className = "", sizes = "100vw", priority, fallback = "contours", alt2 }: Props) {
  const src = photoFile(name);
  if (src) {
    return (
      <div className={`frame ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    );
  }
  if (fallback === "none") return null;
  return <div className={`frame frame-contours ${alt2 ? "alt" : ""} ${className}`} aria-hidden="true" />;
}

// A framed photograph with an optional caption. `width` is the largest size it is shown at, in CSS
// pixels: keep it at or near the file's own width so small source images are never blown up.
export type InsetPhoto = { name: string; alt: string; caption?: string };

export function Inset({
  name, alt, caption, width = 300, ratio = "r-32", priority, className = "",
}: InsetPhoto & { width?: number; ratio?: string; priority?: boolean; className?: string }) {
  if (!hasPhoto(name)) return null;
  return (
    <figure className={`inset ${className}`} style={{ "--w": `${width}px` } as React.CSSProperties}>
      <Photo name={name} alt={alt} className={ratio} sizes={`(max-width: ${width + 40}px) calc(100vw - 40px), ${width}px`} priority={priority} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
