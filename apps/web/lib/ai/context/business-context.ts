export type BusinessContext = {
  businessName?: string;
  businessType?: string;
  location?: string;
  audience?: string;
  style?: string;
  goals?: string[];
};


export const defaultBusinessContext: BusinessContext = {
  businessName: "",
  businessType: "",
  location: "",
  audience: "",
  style: "",
  goals: [],
};