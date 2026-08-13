import Hero from "@/components/sections/HeroSection";
import Menu from "@/components/sections/ProductGridSection";
import Gallery from "@/components/sections/GallerySection";
import Contact from "@/components/sections/ContactSection";


type Props = {
  sections: any[];

  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
};



export default function WebsiteRenderer({
  sections,
}: Props) {


  return (
    <>
      {sections.map((section) => {


        switch(section.type) {


          case "HERO":

            return (
              <Hero
                key={section.id}
                section={section}
              />
            );



          case "MENU":

            return (
              <Menu
                key={section.id}
                section={section}
              />
            );



          case "GALLERY":

            return (
              <Gallery
                key={section.id}
                section={section}
              />
            );



          case "CONTACT":

            return (
              <Contact
                key={section.id}
                section={section}
              />
            );



          default:

            return null;


        }


      })}
    </>
  );
}