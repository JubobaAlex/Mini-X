'use client'
import Tab from '@/app/components/Tab'
import { ITweet } from '../types/tweets.interface'
import Image from 'next/image'
import axios from "axios"
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react"

export default function User() {
    const params = useParams()
    const username = params.username as string
    const [user, setUser] = useState<any>(null)
    const [tweet, setTweet] = useState<ITweet[]>([])
    const [errors, setErrors] = useState<string | null>(null)
    
    useEffect(() =>{
        Poisk()
    },[username])
    
    interface TweetResponse {
        tweets: ITweet[]
    }   
    
    async function Poisk() {
        try {
            const result = await axios.get<TweetResponse>('/data/tweet.json')
            const information = result.data.tweets

            const filterTweets = information.filter(tweet => 
                tweet.author.username === username
            )
            if(filterTweets.length > 0) {
                setUser(filterTweets[0].author)
                setTweet(filterTweets)
            } 
        }
        catch(err: any) {
            setErrors(err.message)
        }
    }

    if (errors) {
        return <div>Error: {errors}</div>
    }

    if (!user) {
        return <div>Loading</div>
    }

    return (
        <div className='div-profile'>
        <Tab />
        <div className="profile-header">
          
            <div className='profile'>
            <Image src="/image/avatars/i.webp" 
            width={80} 
            height={80} 
            alt="Avatar"
            className="avatar-profile" />
            <h1>{user.displayName}</h1>
            <p>@{user.username}</p>
            </div>
            {tweet.map((res) => (
                <div className='lenta' key={res.id}>
                    <div className='text-tweet-profile'>
                        <p>{res.text}</p>
                    </div>
                    
                </div>
            ))}
        </div>
        </div>

    )
}