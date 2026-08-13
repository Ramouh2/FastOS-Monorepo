type GlowProps = {
  children: React.ReactNode;
};

export function Glow({
  children,
}: GlowProps) {
  return (
    <div className="relative">
      <div
        className="
        absolute
        inset-0
        rounded-3xl
        bg-blue-500/20
        blur-3xl
        "
      />

      <div className="relative">
        {children}
      </div>
    </div>
  );
}