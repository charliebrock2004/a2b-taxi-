import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// A photo slot. If public/images/<name>.jpg exists it is rendered through next/image
// (resized, AVIF/WebP, lazy-loaded). If it does not, the slot shows the contour texture,
// or nothing at all when fallback is "none". See IMAGES.md for the list of slots.
export function hasPhoto(name: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "images", `${name}.jpg`));
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
  if (hasPhoto(name)) {
    return (
      <div className={`frame ${className}`}>
        <Image src={`/images/${name}.jpg`} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    );
  }
  if (fallback === "none") return null;
  return <div className={`frame frame-contours ${alt2 ? "alt" : ""} ${className}`} aria-hidden="true" />;
}
