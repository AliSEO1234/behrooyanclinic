import { StaticImageData } from "next/image"

export type TreatCardType = {
    className? : string
    img? : StaticImageData | string
    title? : string
    desc? : string
    path : string
}