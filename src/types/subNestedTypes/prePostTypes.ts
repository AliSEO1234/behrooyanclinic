import { StaticImageData } from "next/image"

export type PrePostCardType = {
    position : "post" | "pre"
    icon : StaticImageData
}
export type PrePostItemCardType = {
    label : string
}
export type PrePostLayoutType = {
    itemList : string[]
    position :  "post" | "pre"
    iconLabel : StaticImageData
}