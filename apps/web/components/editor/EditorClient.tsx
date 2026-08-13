"use client";

import {
  useEffect,
} from "react";


import EditorSidebar from "@/components/editor/EditorSidebar";

import EditorCanvas from "@/components/editor/EditorCanvas";

import SectionInspector from "@/components/editor/SectionInspector";


import {
  useAutoSaveWebsite
} from "@/hooks/useAutoSaveWebsite";


import {
  useEditor
} from "@/components/editor/providers/EditorProvider";



type Props = {

  websiteId: string;

};



export default function EditorClient({

  websiteId

}: Props) {



  const {

    website,

    setWebsite,

    sections,

    setSections,

    selected,

    setSelected,

    updateSection

  } = useEditor();





  useEffect(() => {


    async function loadWebsite() {


      const res = await fetch(
        `/api/editor/${websiteId}`
      );


      const data = await res.json();



      setWebsite(data);


      setSections(
        data.sections || []
      );


    }



    loadWebsite();



  }, [
    websiteId,
    setWebsite,
    setSections
  ]);







  useAutoSaveWebsite({

    websiteId,


    config: {

      sections

    }


  });








  function handleUpdateSection(data:any){


    if(!selected)
      return;



    updateSection(
      selected.id,
      data
    );



    setSelected({

      ...selected,

      ...data

    });


  }









  if(!website){


    return (

      <div className="p-10">

        Chargement du site...

      </div>

    );


  }







  return (

    <div className="min-h-screen flex">


      <EditorSidebar />



      <EditorCanvas


        sections={sections}


        selected={selected}


        setSelected={setSelected}


      />




      <SectionInspector


        section={selected}


        onUpdate={handleUpdateSection}


      />



    </div>

  );

}