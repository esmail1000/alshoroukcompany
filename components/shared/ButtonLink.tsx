import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-brand-brick text-white shadow-lg shadow-brand-brick/20 hover:-translate-y-0.5 hover:bg-brand-orange",
    secondary:
      "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:-translate-y-0.5 hover:bg-brand-deep",
    outline:
      "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-brand-navy"
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
