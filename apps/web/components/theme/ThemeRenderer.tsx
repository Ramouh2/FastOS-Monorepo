import type { WebsiteConfig } from "@/lib/theme/types";

import HeroSection from "@/components/sections/HeroSection";
import ProductGridSection from "@/components/sections/ProductGridSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";


export default function ThemeRenderer({
  website
}:{
  website:WebsiteConfig
}){


  return (

    <>

      {website.pages.map(page=>(

        <div key={page.id}>


          {page.sections.map(section=>{


            switch(section.type){


              case "HERO":

                return (
                  <HeroSection
                    key={section.id}
                    section={section}
                  />
                );


              case "PRODUCT_GRID":

                return (
                  <ProductGridSection
                    key={section.id}
                    section={section}
                  />
                );



              case "GALLERY":

                return (
                  <GallerySection
                    key={section.id}
                    section={section}
                  />
                );



              case "CONTACT":

                return (
                  <ContactSection
                    key={section.id}
                    section={section}
                  />
                );



              default:

                return null;

            }


          })}


        </div>


      ))}


    </>

  );


}