export type ProfileCheckResult = {
  completed: boolean;
  missing: string[];
};


export function checkProfileCompletion(
  profile: {
    businessType?: string | null;
    location?: string | null;
    audience?: string | null;
    style?: string | null;
  }
): ProfileCheckResult {


  const missing:string[] = [];


  if(!profile.businessType){
    missing.push("businessType");
  }


  if(!profile.location){
    missing.push("location");
  }


  if(!profile.audience){
    missing.push("audience");
  }


  if(!profile.style){
    missing.push("style");
  }


  return {

    completed:
      missing.length === 0,

    missing

  };

}