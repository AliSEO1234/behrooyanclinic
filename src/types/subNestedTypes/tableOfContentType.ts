import { StaticImageData } from "next/image"

export type TableOfContentCardType = {
    link: string
    icon : StaticImageData
    label : string
}
export type QuestionAccoType = {
    question: string;
    answer: string;
  };