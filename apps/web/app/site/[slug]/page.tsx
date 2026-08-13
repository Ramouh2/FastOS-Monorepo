import { getPublicWebsite } from "@/lib/use-cases/website/get-public-website";
import { notFound } from "next/navigation";


export default async function PublicSitePage({

  params,

}: {

  params: Promise<{
    slug: string;
  }>;

}) {


  const {
    slug,

  } = await params;




  const website =
    await getPublicWebsite(
      slug
    );





  if (!website || !website.published) {

    notFound();

  }





  return (

    <main

      style={{

        background:
          website.secondaryColor,

        color:
          website.accentColor,

        minHeight: "100vh",

        padding: "40px",

      }}

    >



      <h1

        style={{

          color:
            website.primaryColor,

          fontSize: "48px",

        }}

      >

        {website.title}

      </h1>





      {
        website.sections.map(section => (

          <section

            key={section.id}

            style={{

              padding: "30px",

              marginTop: "20px",

              borderRadius: "20px",

              background:
                "rgba(255,255,255,0.05)",

            }}

          >


            <h2>

              {section.title}

            </h2>



            <p>

              {section.content}

            </p>



          </section>

        ))
      }



    </main>

  );

}