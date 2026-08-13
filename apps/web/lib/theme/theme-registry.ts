import { restaurantPremiumTheme } from "./templates/restaurant-premium";


export const themeRegistry = {


  "restaurant-premium": restaurantPremiumTheme,


};


export function getTheme(
  themeId:string
){

  return themeRegistry[themeId as keyof typeof themeRegistry];

}