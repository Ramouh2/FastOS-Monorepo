import React from "react";


type ButtonVariant =
  | "primary"
  | "secondary"
  | "ai"
  | "ghost"
  | "danger";


type ButtonProps = {
  children: React.ReactNode;

  onClick?: () => void;

  variant?: ButtonVariant;

  disabled?: boolean;

  type?: "button" | "submit" | "reset";

  className?: string;
};



export function Button({

  children,

  onClick,

  variant = "primary",

  disabled = false,

  type = "button",

  className = "",

}: ButtonProps) {



  const variants = {


    primary:
      `
      bg-blue-600
      text-white
      shadow-[0_0_30px_rgba(37,99,235,0.25)]
      hover:bg-blue-500
      hover:shadow-[0_0_45px_rgba(0,163,255,0.45)]
      `,


    ai:
      `
      bg-gradient-to-r
      from-blue-500
      to-purple-600
      text-white
      shadow-[0_0_35px_rgba(139,92,246,0.35)]
      hover:scale-[1.02]
      `,


    secondary:
      `
      border
      border-slate-700
      bg-slate-900
      text-slate-100
      hover:border-blue-500
      hover:bg-slate-800
      `,


    ghost:
      `
      bg-transparent
      text-slate-300
      hover:bg-slate-800
      hover:text-white
      `,


    danger:
      `
      bg-red-600
      text-white
      hover:bg-red-500
      `,

  };



  return (

    <button

      type={type}

      disabled={disabled}

      onClick={onClick}

      className={

        `
        inline-flex
        items-center
        justify-center

        rounded-xl

        px-6
        py-3

        font-semibold

        transition-all
        duration-200

        active:scale-95

        disabled:pointer-events-none
        disabled:opacity-50

        ${variants[variant]}

        ${className}
        `

      }

    >

      {children}

    </button>

  );

}