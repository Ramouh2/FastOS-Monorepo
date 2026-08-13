type MenuSectionProps = {
  products: {
    id: string;
    name: string;
    price: number;
    category?: {
      id: string;
      name: string;
    } | null;
  }[];
};



export function MenuSection({
  products,
}: MenuSectionProps) {


  const categories =
    Array.from(
      new Set(
        products
          .map(
            (product) =>
              product.category?.name
          )
          .filter(Boolean)
      )
    );



  return (

    <section

      style={{
        padding:"30px",
        marginTop:"20px",
        borderRadius:"20px",
        background:"rgba(255,255,255,0.05)",
      }}

    >

      <h2>
        Notre Menu
      </h2>



      {categories.map((category)=>(


        <div key={category}>


          <h3
            style={{
              marginTop:"25px",
              fontSize:"24px",
            }}
          >

            {category}

          </h3>



          {products
            .filter(
              product =>
                product.category?.name === category
            )
            .map(product => (

              <div
                key={product.id}
                style={{
                  display:"flex",
                  justifyContent:"space-between",
                  marginTop:"10px",
                }}
              >

                <span>
                  {product.name}
                </span>


                <span>
                  {product.price.toFixed(2)} €
                </span>


              </div>

            ))}


        </div>


      ))}



    </section>

  );

}