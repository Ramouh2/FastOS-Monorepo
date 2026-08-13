"use client";

import { useState } from "react";
import ColorPicker from "./ColorPicker";

export default function ThemeEditor({
  primaryColor,
  secondaryColor,
  accentColor,
}: {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}) {

  const [primary, setPrimary] = useState(primaryColor);
  const [secondary, setSecondary] = useState(secondaryColor);
  const [accent, setAccent] = useState(accentColor);


  return (
    <div className="space-y-10">

      <ColorPicker
        label="Couleur principale"
        color={primary}
        onChange={setPrimary}
      />


      <ColorPicker
        label="Couleur secondaire"
        color={secondary}
        onChange={setSecondary}
      />


      <ColorPicker
        label="Couleur accent"
        color={accent}
        onChange={setAccent}
      />


      <div className="rounded-2xl p-8"
        style={{
          background: secondary,
          color: accent,
        }}
      >
        <h2
          style={{
            color: primary,
          }}
          className="text-3xl font-bold"
        >
          Aperçu du site
        </h2>

        <p>
          Votre restaurant nouvelle génération
        </p>

      </div>

    </div>
  );
}