interface PlaceholderSectionProps {
  id: string;
  title: string;
}

export default function PlaceholderSection({
  id,
  title,
}: PlaceholderSectionProps) {
  return (
    <section id={id} className="px-6 py-16 border-t border-white/[10%]">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
    </section>
  );
}
