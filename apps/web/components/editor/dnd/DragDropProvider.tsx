"use client";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";


type Props = {
  children: React.ReactNode;
  onDragEnd: (event: any) => void;
};


export default function DragDropProvider({
  children,
  onDragEnd,
}: Props) {


  return (

    <DndContext

      collisionDetection={closestCenter}

      onDragEnd={onDragEnd}

    >

      {children}

    </DndContext>

  );

}