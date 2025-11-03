import './style/notfound.css'
import Link from 'next/link'
export default function notfount() {
    return (
        <div className='cont'>   
            <div className='end'>
                <h1>404</h1>
                <Link style={{ textDecoration: 'none' }} href='/'>Вренуться обратно</Link>
            </div>
            
        </div>  
    )
}