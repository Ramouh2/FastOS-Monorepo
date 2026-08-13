export type SectionType =

  | "HERO"
  | "PRODUCT_GRID"
  | "GALLERY"
  | "TESTIMONIALS"
  | "FAQ"
  | "CONTACT"
  | "BOOKING"
  | "MAP"
  | "NEWSLETTER";



export type SectionDefinition = {

  type: SectionType;

  name: string;

  description: string;

  icon: string;

};