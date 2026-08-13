export type TemplateSection = {

  type:string;

  title:string;

  content:string;

  position:number;

};



export type WebsiteTemplate = {

  id:string;

  name:string;

  category:string;

  description:string;

  sections:TemplateSection[];

  theme:{
    primaryColor:string;
    secondaryColor:string;
    accentColor:string;
  };

};