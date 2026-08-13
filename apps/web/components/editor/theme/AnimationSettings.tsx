"use client";

export default function AnimationSettings({
  settings,
  setSettings,
}: any) {
  return (
    <div>
      <h3 className="font-bold mb-3">
        Animations
      </h3>

      <select
        className="border rounded p-2 w-full"
        value={settings.animation || "fade"}
        onChange={(e) =>
          setSettings({
            ...settings,
            animation: e.target.value,
          })
        }
      >
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
        <option value="zoom">Zoom</option>
        <option value="none">Aucune</option>
      </select>
    </div>
  );
}