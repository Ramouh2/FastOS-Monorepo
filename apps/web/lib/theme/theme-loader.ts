import type { ThemeManifest } from "./theme-manifest";


const themes:Record<string, ThemeManifest> = {};



export function registerTheme(
  theme:ThemeManifest
){

  themes[theme.id] = theme;

}



export function getThemeById(
  id:string
){

  return themes[id];

}



export function getAllThemes(){

  return Object.values(themes);

}