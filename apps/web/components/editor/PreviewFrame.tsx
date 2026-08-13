"use client";

export default function PreviewFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 bg-gray-200 p-8 overflow-auto">

      <div className="bg-white shadow rounded-xl min-h-screen">

        {children}

      </div>

    </div>
  );
}