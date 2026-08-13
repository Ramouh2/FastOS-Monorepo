import { BusinessContext } from "./context/business-context";


export function analyzeBusinessMessage(
  message:string,
  previousContext?: BusinessContext | null
): BusinessContext {


  const lower = message.toLowerCase();


  const context:BusinessContext = {

    businessName:
      previousContext?.businessName ?? "",

    businessType:
      previousContext?.businessType ?? "",

    location:
      previousContext?.location ?? "",

    audience:
      previousContext?.audience ?? "",

    style:
      previousContext?.style ?? "",

    goals:
      previousContext?.goals ?? [],

  };



  // TYPE BUSINESS

  if(
    lower.includes("pizza") ||
    lower.includes("pizzeria")
  ){

    context.businessType="Pizzeria";

  }


  else if(
    lower.includes("burger") ||
    lower.includes("fast food")
  ){

    context.businessType="Fast Food";

  }


  else if(
    lower.includes("restaurant")
  ){

    context.businessType="Restaurant";

  }


  else if(
    lower.includes("boulangerie")
  ){

    context.businessType="Boulangerie";

  }



  // LOCALISATION

  const cities=[
    "nancy",
    "paris",
    "lyon",
    "marseille",
    "lille"
  ];


  for(const city of cities){

    if(lower.includes(city)){

      context.location =
        city.charAt(0).toUpperCase()
        +
        city.slice(1);

    }

  }



  // AUDIENCE

  if(
    lower.includes("étudiant") ||
    lower.includes("etudiant")
  ){

    context.audience="Étudiants";

  }


  else if(
    lower.includes("famille")
  ){

    context.audience="Familles";

  }



  // STYLE

  if(
    lower.includes("premium") ||
    lower.includes("luxe")
  ){

    context.style="Premium";

  }


  else if(
    lower.includes("moderne")
  ){

    context.style="Moderne";

  }


  else if(
    lower.includes("familial")
  ){

    context.style="Familial";

  }



  return context;

}