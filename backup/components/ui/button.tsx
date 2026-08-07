type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
    >
      {children}
    </button>
  );
}