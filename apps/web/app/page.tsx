import { Button } from "../components/ui/button";
import { Container } from "../components/layout/container";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Container>
        <section className="flex min-h-screen flex-col items-center justify-center text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-500">
            FASTOS
          </p>


          <h1 className="max-w-4xl text-6xl font-bold leading-tight">
            The AI Operating System
            <br />
            for Restaurants
          </h1>


          <p className="mt-8 max-w-2xl text-xl text-neutral-400">
            FastOS centralise votre restaurant dans une seule
            plateforme : commandes, produits, paiements,
            statistiques et intelligence artificielle.
          </p>



          <div className="mt-12 flex gap-4">

            <a href="/register">
              <Button>
                Découvrir FastOS
              </Button>
            </a>


            <a href="/dashboard">
              <Button>
                Voir la démo
              </Button>
            </a>

          </div>


        </section>
      </Container>
    </main>
  );
}