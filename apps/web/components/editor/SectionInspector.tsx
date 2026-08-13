"use client";

import { SectionSchemaRegistry } from "@/components/editor/schemas/SectionSchemaRegistry";

type Props = {
  section: any;
  onUpdate: (data: any) => void;
};

export default function SectionInspector({
  section,
  onUpdate,
}: Props) {
  if (!section) {
    return (
      <aside className="w-80 border-l p-6">
        <p className="text-gray-500">
          Sélectionnez une section.
        </p>
      </aside>
    );
  }

  const schema = SectionSchemaRegistry[section.type];

  if (!schema) {
    return (
      <aside className="w-80 border-l p-6">
        Aucun schema disponible.
      </aside>
    );
  }

  return (
    <aside className="w-80 border-l p-6 space-y-6">
      <h2 className="text-xl font-bold">
        {section.type}
      </h2>

      {schema.fields.map((field: any) => (
        <div key={field.key} className="space-y-2">
          <label className="text-sm font-medium">
            {field.label}
          </label>

          <input
            className="w-full border rounded p-2"
            value={section[field.key] ?? ""}
            onChange={(e) =>
              onUpdate({
                [field.key]: e.target.value,
              })
            }
          />
        </div>
      ))}
    </aside>
  );
}