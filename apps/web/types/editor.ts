export type FieldType =
  | "TEXT"
  | "TEXTAREA"
  | "IMAGE"
  | "COLOR"
  | "NUMBER"
  | "SELECT";


export type SectionField = {

  key:string;

  label:string;

  type:FieldType;

};


export type SectionSchema = {

  type:string;

  fields:SectionField[];

};