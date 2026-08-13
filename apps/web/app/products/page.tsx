import { DeleteProductButton } from "../../components/products/delete-product-button";
import { CreateProductForm } from "../../components/products/create-product-form";
import { AppLayout } from "../../components/layout/app-layout";

import { auth } from "../../lib/auth/auth";
import { getCurrentBusiness } from "../../lib/use-cases/business/get-current-business";

import { listProductsService } from "../../lib/services/product-service";

import { listCategories } from "../../lib/categories/list-categories";

import { CreateCategoryForm } from "../../components/categories/create-category-form";
import { CategoryList } from "../../components/categories/category-list";


export default async function ProductsPage() {


  const session = await auth();



  const business =
    session?.user?.id
      ? await getCurrentBusiness(
          session.user.id
        )
      : null;



  const products =
    business
      ? await listProductsService(
          business.id
        )
      : [];



  const categories =
    business
      ? await listCategories(
          business.id
        )
      : [];





  return (

    <AppLayout>


      <div className="space-y-10">


        <div>

          <h1 className="text-3xl font-bold text-white">
            Menu Restaurant
          </h1>


          <p className="mt-2 text-neutral-400">
            Gérez vos catégories et vos produits.
          </p>


        </div>




        <section className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">


          <h2 className="mb-5 text-xl font-bold text-white">
            Catégories
          </h2>


          {business && (

            <CreateCategoryForm
              businessId={business.id}
            />

          )}


          <div className="mt-6">

            <CategoryList
              categories={categories}
            />

          </div>


        </section>





        <section>


          <div className="mb-6 flex items-center justify-between">


            <h2 className="text-xl font-bold text-white">
              Produits
            </h2>


            <CreateProductForm
  categories={categories}
/>

          </div>





          <div className="overflow-hidden rounded-2xl border border-neutral-800">


            <table className="w-full">


              <thead className="bg-neutral-900">

                <tr>

                  <th className="px-6 py-4 text-left">
                    Nom
                  </th>


                  <th className="px-6 py-4 text-left">
                    Catégorie
                  </th>


                  <th className="px-6 py-4 text-left">
                    Prix
                  </th>


                  <th className="px-6 py-4 text-left">
                    Statut
                  </th>


                  <th className="px-6 py-4 text-left">
                    Actions
                  </th>


                </tr>

              </thead>




              <tbody>


                {products.map((product)=>(


                  <tr
                    key={product.id}
                    className="border-t border-neutral-800"
                  >


                    <td className="px-6 py-4 text-white">
                      {product.name}
                    </td>



                    <td className="px-6 py-4 text-white">

                      {product.category?.name ?? product.type}

                    </td>



                    <td className="px-6 py-4 text-white">

                      {product.price.toFixed(2)} €

                    </td>



                    <td className="px-6 py-4">

                      {product.status}

                    </td>



                    <td className="px-6 py-4">

                      <DeleteProductButton
                        id={product.id}
                      />

                    </td>


                  </tr>


                ))}



              </tbody>


            </table>


          </div>


        </section>


      </div>


    </AppLayout>

  );

}