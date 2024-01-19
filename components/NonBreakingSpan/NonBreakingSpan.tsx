interface NonBreakingSpanProps {
  children: React.ReactNode;
}

export const NonBreakingSpan = ({ children }: NonBreakingSpanProps) => {
  return <span className="whitespace-nowrap">{children}</span>;
};
