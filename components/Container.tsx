interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-6xl w-full px-6">{children}</div>;
}
