const variants = {
  primary:
    "border-wine bg-berry text-cream shadow-[5px_5px_0_var(--color-wine)]",
  outline: "border-berry text-berry",
};

interface ButtonProps {
  children: React.ReactNode;
  variant: keyof typeof variants;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant,
  href,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const className = `rounded-full border-3 px-6.5 py-3.5 text-base font-bold ${variants[variant]} ${
    disabled ? "cursor-not-allowed opacity-70" : ""
  }`;

  if (href) {
    // Un <a> no admite disabled: sin href deja de navegar.
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={className}>
      {children}
    </button>
  );
}
