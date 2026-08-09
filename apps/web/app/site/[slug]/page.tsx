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

  console.log("WEBSITE DATA", website);

  return (
    <main
      style={{
        background: website.secondaryColor,
        color: website.accentColor,
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: website.primaryColor,
          fontSize: "48px",
        }}
      >
        {website.title}
      </h1>

      {website.sections.map((section) => (
        <section
          key={section.id}
          style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "16px",
            background: "#222",
          }}
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </main>
  );
}