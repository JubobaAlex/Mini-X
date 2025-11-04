export interface ITweet {
    id: number
    author: {
    username:string
    displayName:string
    }
    text:string
    createdAt:string
    likes:number
}