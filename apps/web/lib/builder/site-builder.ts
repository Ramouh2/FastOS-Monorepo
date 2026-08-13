import type {
  SiteConfig,
  SectionConfig,
  BlockConfig
} from "./site-config";



export function addSection(
  site:SiteConfig,
  pageId:string,
  section:SectionConfig
){


  const page =
  site.pages.find(
    p=>p.id===pageId
  );


  if(!page)
    throw new Error("Page not found");


  page.sections.push(section);


  return site;

}



export function removeSection(
  site:SiteConfig,
  pageId:string,
  sectionId:string
){


 const page =
 site.pages.find(
  p=>p.id===pageId
 );


 if(!page)
  throw new Error("Page not found");


 page.sections =
 page.sections.filter(
  s=>s.id!==sectionId
 );


 return site;

}



export function updateBlock(
 block:BlockConfig,
 data:any
){


 return {

  ...block,

  ...data

 };


}