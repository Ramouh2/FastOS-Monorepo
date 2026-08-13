import { auth } from "@/lib/auth/auth";
import { getCurrentBusiness } from "@/lib/use-cases/business/get-current-business";
import { getWebsite } from "@/lib/use-cases/website/get-website";

import ThemeEditor from "@/components/ThemeEditor";



export default async function WebsiteAppearancePage() {


  const session = await auth();



  const business =
    session?.user?.id

      ? await getCurrentBusiness(
          session.user.id
        )

      : null;



  if (!business) {

    return (

      <main className="min-h-screen bg-neutral-950 p-8 text-white">

        Restaurant introuvable

      </main>

    );

  }





  const website =
    await getWebsite(
      business.id
    );





  if (!website) {

    return (

      <main className="min-h-screen bg-neutral-950 p-8 text-white">

        Website introuvable

      </main>

    );

  }






  return (

    <main className="min-h-screen bg-neutral-950 p-8 text-white">


      <h1 className="mb-10 text-4xl font-bold">

        Apparence du site

      </h1>





      <ThemeEditor

        primaryColor={
          website.primaryColor
        }


        secondaryColor={
          website.secondaryColor
        }


        accentColor={
          website.accentColor
        }

      />



    </main>

  );

}