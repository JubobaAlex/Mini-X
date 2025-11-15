import { Post } from '../server-action/tweetCreate'
import '../style/PostBtn.css'
import Image from 'next/image'
import '../animation/animation.css'

export function PostBtn() {
    const btn = document.querySelector('.btn-post')

    function PostEnter() {
        btn?.addEventListener('click' , () => Post )
    }
    return(
        <div>
        <form className='formPost' action={Post}>

             <Image 
                src="/image/avatars/i.webp" 
                width={40} 
                height={40} 
                alt="Avatar"
                className="avatar-img"
            />

            <input type="text" placeholder='What happening?' name="content" />
            <div className='btn-div'>
            <button onClick={() => PostEnter} className='btn-post'>Post</button>
        </div>
        </form>
        
        
        </div>
    )
}