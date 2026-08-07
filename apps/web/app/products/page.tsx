import { CreateProductForm } from "../../components/products/create-product-form";
import { listProducts } from "../../lib/products/list-products";
import { AppLayout } from "../../components/layout/app-layout";

export default async function ProductsPage() {
  const products = await listProducts();

  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Produits
          </h1>

          <p className="mt-2 text-neutral-400">
            Gérez le catalogue de votre restaurant.
          </p>
        </div>

        <CreateProductForm />
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-800">
        <table className="w-full">
          <thead className="bg-neutral-900">
            <tr>
              <th className="px-6 py-4 text-left">Nom</th>
              <th className="px-6 py-4 text-left">Catégorie</th>
              <th className="px-6 py-4 text-left">Prix</th>
              <th className="px-6 py-4 text-left">Statut</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product!.id}
                className="border-t border-neutral-800"
              >
                <td className="px-6 py-4">
                  {product!.name}
                </td>

                <td className="px-6 py-4">
                  {product!.type}
                </td>

                <td className="px-6 py-4">
                  {product!.price.toFixed(2)} €
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-600 px-3 py-1 text-sm">
                    {product!.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}