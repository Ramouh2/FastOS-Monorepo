import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/prisma/client";

export default async function WebsiteAppearancePage() {
  const session = await auth();

  const business = await prisma.business.findFirst({
    where: {
      userId: session?.user?.id,
    },
    include: {
      website: true,
    },
  });

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">

      <h1 className="text-4xl font-bold">
        Apparence du site
      </h1>

      <pre className="mt-8 rounded-xl bg-neutral-900 p-6">
        {JSON.stringify(
          {
            session,
            business,
          },
          null,
          2
        )}
      </pre>

    </main>
  );
}