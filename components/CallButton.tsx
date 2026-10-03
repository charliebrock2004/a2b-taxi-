import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

// The one conversion action on the site. Always a real tel: link, never a script.
export function CallButton({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <a href={site.phoneHref} className={`btn btn-silver ${className}`}>
      <PhoneIcon />
      <span>{label ?? `Call ${site.phoneDisplay}`}</span>
    </a>
  );
}
