export type HomePageFormType = {
  full_name: string;
  treatment: string;
  phone: string;
  email: string;
};
export type HomePlatformWorkFormType = {
  full_name: string;
  treatment: string;
  phone: string;
};
export type PopFormType = {
  full_name: string;
  treatment: string;
  phone: string;
  email  :string
};
export type SideBarType = {
  full_name : string
  email : string
  phone : string
  treatment : string
}
export type SubnestedFormType = {
  email : string
  phone : string
}
export type ContactUsFormType = {
  firstName : string
  surname : string
  email : string
  phone : string
  message : string
}
export type PatientFormType = {
  fullname : string
  email : string
  phone : string
  treatment : string
}
export type LeadFormType = {
  className? : string
}
export type FormItemType= {
  fullName : string
  phone : string
  email : string
}