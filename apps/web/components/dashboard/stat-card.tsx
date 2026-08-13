import React from "react";


type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  color?: "blue" | "purple" | "cyan";
  trend?: string;
};


export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  color = "blue",
  trend,
}: StatCardProps) {


  const colors = {
    blue: {
      border: "border-blue-500/20",
      glow: "bg-blue-500/20",
      icon: "text-blue-400",
      iconBg: "bg-blue-500/10",
    },

    purple: {
      border: "border-purple-500/20",
      glow: "bg-purple-500/20",
      icon: "text-purple-400",
      iconBg: "bg-purple-500/10",
    },

    cyan: {
      border: "border-cyan-500/20",
      glow: "bg-cyan-500/20",
      icon: "text-cyan-400",
      iconBg: "bg-cyan-500/10",
    },
  };


  const theme = colors[color];


  return (
    <div
      className={`
      group
      relative
      overflow-hidden

      rounded-3xl

      border
      ${theme.border}

      bg-[#070B16]

      p-6

      transition-all
      duration-300

      hover:-translate-y-1

      hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]
      `}
    >

      <div
        className={`
        absolute
        -right-10
        -top-10

        h-32
        w-32

        rounded-full

        ${theme.glow}

        blur-3xl
        `}
      />


      <div className="relative">


        <div className="flex items-center justify-between">

          <p
            className="
            text-sm
            font-medium
            text-slate-400
            "
          >
            {title}
          </p>



          <div
            className={`
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-xl

            ${theme.iconBg}

            transition

            group-hover:scale-110
            `}
          >

            <Icon
              size={22}
              className={theme.icon}
            />

          </div>

        </div>




        <h2
          className="
          mt-6

          text-4xl

          font-black

          tracking-tight

          text-white
          "
        >
          {value}
        </h2>



        <p
          className="
          mt-3

          text-sm

          text-slate-500
          "
        >
          {description}
        </p>



        {trend && (
          <p
            className="
            mt-2

            text-xs

            font-semibold

            text-green-400
            "
          >
            {trend}
          </p>
        )}


      </div>


    </div>
  );
}