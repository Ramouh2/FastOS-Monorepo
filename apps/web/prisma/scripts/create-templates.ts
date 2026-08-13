import { prisma } from "@/lib/prisma/client";


async function main(){


  await prisma.websiteTemplate.deleteMany();



  await prisma.websiteTemplate.createMany({

    data:[

      {
        name:"Bakery",

        category:"bakery",

        preview:"/templates/bakery.png",

        settings:{
          colors:{
            primary:"#d97706",
            secondary:"#451a03"
          },
          sections:[
            "HERO",
            "PRODUCT_GRID",
            "STORY",
            "CONTACT"
          ]
        }
      },


      {
        name:"Restaurant Modern",

        category:"restaurant",

        preview:"/templates/restaurant-modern.png",

        settings:{
          colors:{
            primary:"#2563eb",
            secondary:"#111827"
          },
          sections:[
            "HERO",
            "PRODUCT_GRID",
            "GALLERY",
            "CONTACT"
          ]
        }
      },


      {
        name:"Restaurant Premium",

        category:"restaurant",

        preview:"/templates/restaurant-premium.png",

        settings:{
          colors:{
            primary:"#991b1b",
            secondary:"#18181b"
          },
          sections:[
            "HERO",
            "FEATURED_PRODUCTS",
            "REVIEWS",
            "CONTACT"
          ]
        }
      }

    ]

  });


  console.log("Templates created 🚀");

}


main()
.then(()=>prisma.$disconnect())
.catch(async(e)=>{

 console.error(e);

 await prisma.$disconnect();

 process.exit(1);

});