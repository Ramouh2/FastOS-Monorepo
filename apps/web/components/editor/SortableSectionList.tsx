"use client";


import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";


import SortableSection from "./SortableSection";


import DragDropProvider from "./dnd/DragDropProvider";



export default function SortableSectionList({

  sections,

  setSections,

  selected,

  setSelected

}: any) {



  function handleDragEnd(event: any) {


    const {
      active,
      over
    } = event;



    if (!over || active.id === over.id) {

      return;

    }




    const oldIndex =

      sections.findIndex(

        (section: any) =>

          section.id === active.id

      );





    const newIndex =

      sections.findIndex(

        (section: any) =>

          section.id === over.id

      );






    const reorderedSections =

      arrayMove(

        sections,

        oldIndex,

        newIndex

      );



    setSections(

      reorderedSections

    );


  }





  return (


    <DragDropProvider

      onDragEnd={handleDragEnd}

    >



      <SortableContext

        items={
          sections.map(
            (section:any)=>section.id
          )
        }

        strategy={
          verticalListSortingStrategy
        }

      >



        {

          sections.map(

            (section:any)=>(


              <SortableSection


                key={section.id}


                section={section}


                selected={selected}


                setSelected={setSelected}


              />


            )


          )

        }



      </SortableContext>



    </DragDropProvider>


  );


}