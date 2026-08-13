export type ThemeConfig = {

  name:string;

  colors:{
    primary:string;
    secondary:string;
    accent:string;
    background:string;
    text:string;
  };


  typography:{
    heading:string;
    body:string;
  };


  sections:string[];

};



export type BlockConfig = {

  id:string;

  type:string;

  settings:any;

  content:any;

};



export type SectionConfig = {

  id:string;

  type:string;

  position:number;

  settings:any;

  blocks:BlockConfig[];

};



export type PageConfig = {

  id:string;

  name:string;

  slug:string;

  sections:SectionConfig[];

};



export type WebsiteConfig = {

  theme:ThemeConfig;

  pages:PageConfig[];

};