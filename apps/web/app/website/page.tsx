import { getWebsiteByBusinessId } from "../../lib/repositories/website-repository";
import { auth } from "../../lib/auth/auth";
import { prisma } from "../../lib/prisma/client";


export default async function WebsitePage() {

  const session = await auth();
  console.log("SESSION USER:", session?.user?.id);

  const business = await prisma.business.findFirst({
  where: {
    userId: session?.user?.id,
    website: {
      isNot: null,
    },
  },
  include: {
    website: true,
  },
});

console.log("BUSINESS:", business?.name);
console.log("WEBSITE:", business?.website);


  if(!business){
    return (
      <div className="p-8 text-white">
        Aucun restaurant trouvé
      </div>
    );
  }


  const website =
    await getWebsiteByBusinessId(
      business.id
    );
  console.log("WEBSITE:", website);


  return (
    <main className="p-8 text-white">

      <h1 className="text-4xl font-bold">
        Website Builder
      </h1>

      <p className="mt-2 text-neutral-400">
        Créez le site de {business.name}
      </p>


      <div className="mt-8 space-y-6">

        {website?.sections.map((section)=>(

          <div
            key={section.id}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
          >

            <h2 className="text-xl font-bold">
              {section.type}
            </h2>

            <p className="mt-2 text-neutral-400">
              {section.title}
            </p>

            <p className="mt-4">
              {section.content}
            </p>


            <a
  href={`/website/sections/${section.id}`}
  className="mt-4 inline-block rounded-xl bg-orange-500 px-4 py-2"
>
  Modifier
</a>

          </div>

        ))}

      </div>

    </main>
  );
}