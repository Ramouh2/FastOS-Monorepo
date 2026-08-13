export type Theme = {


  id?: string;


  name:string;


  category:string;


  theme:{


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


};