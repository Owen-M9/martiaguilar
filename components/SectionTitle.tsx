const shadows = {
  mint: "text-shadow-[4px_4px_0_var(--color-mint)]",
  azure: "text-shadow-[4px_4px_0_var(--color-azure)]",
  magenta: "text-shadow-[4px_4px_0_var(--color-magenta)]",
};

interface SectionTitleProps {
  children: React.ReactNode;
  shadow: keyof typeof shadows;
}

export default function SectionTitle({ children, shadow }: SectionTitleProps) {
  return (
    <h2
      className={`font-display text-5xl leading-[1.05] font-bold uppercase text-berry ${shadows[shadow]}`}
    >
      {children}
    </h2>
  );
}
