import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "inverted";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-body text-[15px] font-medium tracking-wide rounded-sm transition-colors duration-150";

  const variants = {
    primary:
      "bg-[#408225] text-white px-7 py-3.5 hover:bg-forest",
    ghost:
      "text-[#408225] underline underline-offset-4 decoration-[#408225] px-0 py-0 hover:text-forest hover:decoration-forest",
    inverted:
      "bg-white text-forest px-7 py-3.5 hover:bg-cream",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {(variant === "primary" || variant === "inverted") && <span aria-hidden="true">&rarr;</span>}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {(variant === "primary" || variant === "inverted") && <span aria-hidden="true">&rarr;</span>}
    </button>
  );
}
