'use client'
import axios from 'axios'
import type { ITweet } from '../types/tweets.interface'
import '../style/Tweets.css'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {addLike} from '../Redux/Slice/likeSlice'
import { PostBtn } from './PostBtn'
export default function Tweets() {
    interface TweetResponse {
    tweets: ITweet[]
}

    const dispatch = useDispatch()
    const likesData = useSelector((state: any) => state.like.likesData)

    function addedLike(tweetId: number) {
        dispatch(addLike(tweetId))
    }


    function getTotalLikes(tweetId: number, baseLikes: number) {
    const additionalLikes = likesData[tweetId] || 0
    return baseLikes + additionalLikes
}
     const [tweet, setTweet] = useState<ITweet[]>([])
     const [errors, setErrors] = useState<string | null>(null)
    useEffect(() => {
        Fetch()
    },[])
    async function Fetch() {
        try {
        const result = await axios.get<TweetResponse>('/data/tweet.json')
        setTweet(result.data.tweets)
        }
        catch(err: any) {
            setErrors(err)
        }
    }

    if(errors) {
        return <div>Ошибка</div>
    }
   
    
    return (
        <div className='tweets-osnova'>
            <PostBtn />
            {tweet.map(property =>(
                <div  key={property.id}>
                    <div className='user-tweet'>
                    <div className='names-tweet'>
                        <Image src="/image/avatars/i.webp" 
                        width={40} 
                        height={40} 
                        alt="Avatar"
                        className="avatar-user" />
                       <Link href={`/user/${property.author.username}`}  style={{fontWeight:'bold', color:'white'}}>{property.author.displayName}</Link>
                        <p className='id-user-tweet'>@{property.author.username}</p>
                        <p className='time-tweet-create'>{property.createdAt}</p>
                    </div>
                    <p>{property.text}</p>
                    <div className='likes'>
                         <button className='btn-like' onClick={() => addedLike(property.id, property.likes)}>❤{getTotalLikes(property.id, property.likes)}</button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
} 