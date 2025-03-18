import { StaticImageData } from "next/image"

export type ServiceType = {
    label : string
    countService : number
    path : string
    img: StaticImageData
}