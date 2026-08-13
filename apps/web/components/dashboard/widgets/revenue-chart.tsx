"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export function RevenueChart({
  data,
}: {
  data: {
    date: string;
    revenue: number;
  }[];
}) {


  const chartData = data.map((item) => ({
    day: new Date(item.date).toLocaleDateString(
      "fr-FR",
      {
        weekday: "short",
      }
    ),

    revenue: item.revenue,
  }));


  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Évolution du chiffre d'affaires
      </h2>


      <div className="h-72">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={chartData}>

            <XAxis
              dataKey="day"
              stroke="#888"
            />

            <YAxis
              stroke="#888"
            />

            <Tooltip />


            <Line
              type="monotone"
              dataKey="revenue"
              strokeWidth={3}
            />


          </LineChart>

        </ResponsiveContainer>

      </div>


    </div>
  );
}