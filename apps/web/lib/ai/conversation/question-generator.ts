export function generateNextQuestion(
  missing:string[]
){

  if(missing.includes("businessType")){

    return "Quel est le type de votre entreprise ?";

  }


  if(missing.includes("location")){

    return "Dans quelle ville êtes-vous situé ?";

  }


  if(missing.includes("audience")){

    return "Quelle est votre clientèle principale ?";

  }


  if(missing.includes("style")){

    return "Quel style souhaitez-vous pour votre image ? (Premium, Moderne, Familial...)";

  }


  return "J'ai toutes les informations nécessaires. Je peux créer votre site.";

}