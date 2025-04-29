import { StaticImageData } from "next/image"
import { ImgType } from "./galleryAbout"

export type BranchCardType = {
    title : string
    photoList : ImgType[]
    locationAddress : string
    desc : string
    phone: string
    mapCover : StaticImageData
    mapLink : string
}