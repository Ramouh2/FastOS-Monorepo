export type SiteConfig = {

  id:string;

  theme:string;


  settings:{

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

  };


  pages:PageConfig[];

};



export type PageConfig = {

  id:string;

  name:string;

  slug:string;


  sections:SectionConfig[];

};



export type SectionConfig = {

  id:string;

  type:string;

  position:number;


  settings:any;


  blocks:BlockConfig[];

};



export type BlockConfig = {

  id:string;

  type:string;

  position:number;


  content:any;


  settings:any;

};