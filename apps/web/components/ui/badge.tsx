type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-blue-500/30
      bg-blue-500/10
      px-3
      py-1
      text-xs
      font-medium
      text-blue-400
      backdrop-blur
      "
    >
      {children}
    </span>
  );
}