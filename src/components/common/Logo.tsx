import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2 font-semibold tracking-tight", className)}
    >
      <img
        src="/logo-icon.png"
        alt=""
        width={32}
        height={32}
        className="size-8 shrink-0 rounded-lg shadow-md shadow-primary/30"
      />
      <span className={cn("text-lg", light ? "text-white" : "text-foreground")}>
        {SITE.name}
      </span>
    </Link>
  );
}
