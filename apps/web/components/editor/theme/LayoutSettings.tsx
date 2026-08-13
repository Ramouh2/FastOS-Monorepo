"use client";

export default function LayoutSettings({
  settings,
  setSettings,
}: any) {
  return (
    <div>
      <h3 className="font-bold mb-3">
        Layout
      </h3>

      <input
        type="range"
        min="0"
        max="40"
        value={settings.radius || 16}
        onChange={(e) =>
          setSettings({
            ...settings,
            radius: Number(e.target.value),
          })
        }
      />
    </div>
  );
}