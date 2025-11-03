import Link from "next/link"
import Image from 'next/image'
import '../style/Tab.css'

const navItems = [
    { href: '/', icon: '🏠', text: 'Главная' },
    { href: '/', icon: '🔍', text: 'Обзор' },
    { href: '/', icon: '🔔', text: 'Уведомления' },
    { href: '/', icon: '✉️', text: 'Сообщения' },
    { href: '/', icon: '👤', text: 'Профиль' },
]

export default function Tab() {

    
    return (
        <div className="x-tab">
            <div className="x-logo">
                <Link style={{ textDecoration: 'none' }} href="/">
                    <div className="logo-container">
                        <span className="x-icon">𝕏</span>
                    </div>
                </Link>
            </div>

            <nav className="x-nav">
                {navItems.map((item) => (
                    <div className= "x-nav-link" >
                        <span className="x-nav-icon">{item.icon}</span>
                        <span className="x-nav-text">{item.text}</span>
                    </div>
                    
                ))}
            </nav>
            <button className="tweet-button">
                <span className="tweet-button-text">Post</span>
            </button>


            <div className="user-profile">
                <div className="user-avatar">
                    <Image 
                        src="/image/avatars/i.webp" 
                        width={40} 
                        height={40} 
                        alt="Avatar"
                        className="avatar-img"
                    />
                </div>
                <div className="user-info">
                    <div className="user-name">Имя пользователя</div>
                    <div className="user-handle">@username</div>
                </div>
            </div>
        </div>
    )
}