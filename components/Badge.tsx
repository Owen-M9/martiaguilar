const colors = {
  butter: "bg-butter",
  powder: "bg-powder",
  white: "bg-white",
  cream: "bg-cream",
};

interface BadgeProps {
  children: React.ReactNode;
  color: keyof typeof colors;
}

export default function Badge({ children, color }: BadgeProps) {
  return (
    <p
      className={`rounded-full border-[2.5px] border-wine px-4 py-1.75 text-[13px] font-bold uppercase tracking-[0.4px] text-wine ${colors[color]}`}
    >
      {children}
    </p>
  );
}
