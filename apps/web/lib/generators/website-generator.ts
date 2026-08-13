export type RestaurantProfile = {

  type: string;

  style: string;

  audience: string;

  location?: string;


  template?: {

    name: string;

    category: string;

    sections: {

      type: string;

      title: string;

      content: string;

      position: number;

    }[];

  };

};



export type GeneratedWebsite = {


  template: string;


  theme: {

    primaryColor: string;

    secondaryColor: string;

    accentColor: string;

  };


  sections: {

    type: string;

    title: string;

    content: string;

    position: number;

  }[];

};





export function generateRestaurantWebsite(
  profile: RestaurantProfile
): GeneratedWebsite {



  let theme = {

    primaryColor:"#f97316",

    secondaryColor:"#171717",

    accentColor:"#ffffff",

  };





  switch(profile.style.toLowerCase()){


    case "premium":

      theme = {

        primaryColor:"#b91c1c",

        secondaryColor:"#18181b",

        accentColor:"#facc15",

      };

      break;



    case "nature":

      theme = {

        primaryColor:"#16a34a",

        secondaryColor:"#052e16",

        accentColor:"#ecfccb",

      };

      break;



    case "moderne":

      theme = {

        primaryColor:"#2563eb",

        secondaryColor:"#111827",

        accentColor:"#ffffff",

      };

      break;



    case "familial":

      theme = {

        primaryColor:"#ea580c",

        secondaryColor:"#431407",

        accentColor:"#fed7aa",

      };

      break;


  }




  const sections = profile.template?.sections || [

    {

      type:"HERO",

      title:`${profile.type}`,

      content:`Une expérience ${profile.style} pour ${profile.audience}.`,

      position:1

    },


    {

      type:"CONTACT",

      title:"Nous contacter",

      content:"Adresse et horaires",

      position:2

    }

  ];





  return {


    template:
    profile.template?.name || "Restaurant Modern",


    theme,


    sections,


  };

}