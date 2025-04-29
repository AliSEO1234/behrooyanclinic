export type FeedbackCardType = {
    fullName: string
    desc : string
    rateCount : number
}
export type FeedbackLayoutType = {
    feedbackList: FeedbackCardType[]
    align : "right" | "left"
}