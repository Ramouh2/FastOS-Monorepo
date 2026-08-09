import { prisma } from "@/lib/prisma/client";
import { notFound } from "next/navigation";

export default async function PublicWebsitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const website = await prisma.website.findUnique({
    where: {
      slug,
    },
    include: {
      sections: {
        orderBy: {
          position: "asc",
        },
      },
      business: true,
    },
  });


  if (!website) {
    notFound();
  }


  return (
    <main
      style={{
        backgroundColor: website.secondaryColor,
        color: website.accentColor,
        minHeight: "100vh",
      }}
    >

      <header
        style={{
          padding: "40px",
          backgroundColor: website.primaryColor,
        }}
      >
        <h1>
          {website.title}
        </h1>

        <p>
          {website.business.name}
        </p>

      </header>


      <section
        style={{
          padding: "40px",
        }}
      >

      {website.sections.map((section)=>(
        <article
          key={section.id}
          style={{
            marginBottom:"30px"
          }}
        >

          <h2>
            {section.title}
          </h2>

          <p>
            {section.content}
          </p>

        </article>
      ))}

      </section>


    </main>
  );
}
