import { StaticImageData } from "next/image"

export type BranchCardType = {
    title : string
    photoList : StaticImageData[]
    locationAddress : string
    desc : string
    phone: string
}