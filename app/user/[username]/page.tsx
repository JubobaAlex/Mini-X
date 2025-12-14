'use client'
import Tab from '@/app/components/Tab'
import type { ITweet } from '../types/tweets.interface'
import Image from 'next/image'
import axios from "axios"
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addLike } from '@/app/Redux/Slice/likeSlice'
export default function User() {

    const params = useParams()
    const username = params.username as string
    const [user, setUser] = useState<any>(null)
    const [tweet, setTweet] = useState<ITweet[]>([])
    const [errors, setErrors] = useState<string | null>(null)
    
    //Для редукс
    const dispatch = useDispatch()
    const likesData = useSelector((state: any) => state.like.likesData)

    function addedLike(tweetId: number) {
        dispatch(addLike(tweetId))
    }


    function getTotalLikes(tweetId: number, baseLikes: number) {
    const additionalLikes = likesData[tweetId] || 0
    return baseLikes + additionalLikes
}

    //конец кода для редукса
    interface ResponseTweet {
        tweets: ITweet[]
    }
    useEffect(() => {
        Poisk()
    },[username])

    async function Poisk() {
        try {
        const response = await axios.get<ResponseTweet>('/data/tweet.json')
        const result = response.data.tweets
        
        const fiterTweets = result.filter(userRes => 
            userRes.author.username === username
        )

        if(fiterTweets.length  > 0) {
            setUser(fiterTweets[0].author)
            setTweet(fiterTweets)
        }
    }
        catch(err: any) {
            setErrors(errors)
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
                        <div className='likes'>
                        <button className={`btn-like ${likesData[res.id] === 1 ? 'Like' : ''}`} onClick={() => addedLike(res.id)}>❤{getTotalLikes(res.id, res.likes)}</button>
                    </div>
                    </div>
                    
                </div>
            ))}
        </div>
        </div>

    )
}