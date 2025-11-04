'use client'
import axios from 'axios'
import type { ITweet } from '../types/tweets.interface'
import '../style/Tweets.css'
import { useEffect, useState } from 'react'
import Image from 'next/image';
export default function Tweets() {
    interface TweetResponse {
    tweets: ITweet[]
}
     const [tweet, setTweet] = useState<ITweet[]>([])
    useEffect(() => {
        Fetch()
    },[])
    async function Fetch() {
        try {
        const result = await axios.get<TweetResponse>('/data/tweet.json')
        setTweet(result.data.tweets)
        }
        catch(err) {
            console.log(err)
        }
    }
   
    
    return (
        <div className='tweets-osnova'>
            {tweet.map(property =>(
                <div  key={property.id}>
                    <div className='user-tweet'>
                    <div className='names-tweet'>
                        <Image src="/image/avatars/i.webp" 
                        width={40} 
                        height={40} 
                        alt="Avatar"
                        className="avatar-user" />
                        <a href='/' style={{fontWeight:'bold', color:'white'}}>{property.author.displayName}</a>
                        <p className='id-user-tweet'>@{property.author.username}</p>
                        <p className='time-tweet-create'>{property.createdAt}</p>
                    </div>
                    <p>{property.text}</p>
                </div>
                </div>
            ))}
        </div>
    )
} 