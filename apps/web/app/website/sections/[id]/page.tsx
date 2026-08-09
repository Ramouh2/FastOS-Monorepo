import SaveButton from "@/components/SaveButton";
import { prisma } from "@/lib/prisma/client";
import { notFound, redirect } from "next/navigation";
import { updateSection } from "../actions/update-section";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SectionEditorPage({
  params,
}: Props) {

  const { id } = await params;


  const section =
    await prisma.websiteSection.findUnique({
      where: {
        id,
      },
    });


  if (!section) {
    return notFound();
  }


async function save(formData: FormData){

"use server";

const title =
 formData.get("title") as string;

const content =
 formData.get("content") as string;


await updateSection(
 id,
 title,
 content
);


redirect(`/website/sections/${id}`);

}


  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">


      <h1 className="text-4xl font-bold">
        Modifier section
      </h1>


      <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">


        <form
          action={save}
          className="space-y-6"
        >


          <div>

            <label>
              Type
            </label>

            <p className="mt-2 text-orange-400">
              {section.type}
            </p>

          </div>



          <div>

            <label>
              Titre
            </label>


            <input
              name="title"
              defaultValue={section.title}
              className="mt-2 w-full rounded-xl bg-neutral-800 p-3"
            />

          </div>



          <div>

            <label>
              Contenu
            </label>


            <textarea
              name="content"
              defaultValue={section.content}
              rows={5}
              className="mt-2 w-full rounded-xl bg-neutral-800 p-3"
            />

          </div>



          <SaveButton />


        </form>


      </div>


    </main>
  );
}
