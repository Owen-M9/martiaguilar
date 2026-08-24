interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto max-w-6xl w-full px-6 ${className}`}>{children}</div>;
}
