import { ReactNode } from "react";


type CardProps = {
  children: ReactNode;
  className?: string;
};


export function Card({
  children,
  className = "",
}: CardProps) {

  return (

    <div
      className={`
      relative
      overflow-hidden

      rounded-3xl

      border
      border-blue-500/20

      bg-slate-950/70

      backdrop-blur-xl

      shadow-[0_20px_60px_rgba(0,0,0,0.45)]

      transition-all
      duration-300

      hover:
      -translate-y-1

      hover:
      border-blue-400/40

      hover:
      shadow-[0_25px_80px_rgba(37,99,235,0.15)]

      ${className}
      `}
    >

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-br
        from-blue-500/10
        via-transparent
        to-purple-500/10
        "
      />


      <div className="relative">
        {children}
      </div>


    </div>

  );
}


export function CardHeader({
  children,
}: CardProps) {

  return (
    <div className="p-6">
      {children}
    </div>
  );
}


export function CardTitle({
  children,
}: CardProps) {

  return (
    <h3 className="text-lg font-semibold text-white">
      {children}
    </h3>
  );
}


export function CardDescription({
  children,
}: CardProps) {

  return (
    <p className="text-sm text-slate-400">
      {children}
    </p>
  );
}


export function CardContent({
  children,
}: CardProps) {

  return (
    <div className="px-6 pb-6">
      {children}
    </div>
  );
}