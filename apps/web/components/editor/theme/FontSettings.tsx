"use client";

export default function FontSettings({
  settings,
  setSettings,
}: any) {
  return (
    <div>
      <h3 className="font-bold mb-3">
        Typographie
      </h3>

      <select
        className="border rounded p-2 w-full"
        value={settings.font || "Inter"}
        onChange={(e) =>
          setSettings({
            ...settings,
            font: e.target.value,
          })
        }
      >
        <option>Inter</option>
        <option>Poppins</option>
        <option>Playfair Display</option>
        <option>Roboto</option>
      </select>
    </div>
  );
}