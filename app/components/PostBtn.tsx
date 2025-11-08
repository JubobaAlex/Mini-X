import { Post } from '../server-action/tweetCreate'
import '../style/PostBtn.css'
import Image from 'next/image'
import '../animation/animation.css'

export function PostBtn() {
    return(
        <div>

        
        <form className='formPost' action={Post}>
            <div className="user-avatar">
             <Image 
                src="/image/avatars/i.webp" 
                width={40} 
                height={40} 
                alt="Avatar"
                className="avatar-img"
            />
                            </div>
            <input type="text" placeholder='What happening?' name="content" />
        </form>
        <div className='btn-div'>
            <button className='btn-post'>Post</button>
        </div>
        
        </div>
    )
}