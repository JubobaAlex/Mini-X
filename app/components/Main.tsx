import React from 'react';
import { Suspense } from 'react';
import Tab from './Tab';
import '../style/Main.css'


export default function Main() {
    const Tweets = React.lazy(() => import ('./Tweets') as Promise<{ default: React.ComponentType }>);
    return (
        <div className='Main'>
            <Tab />
            <div className="tweets-wrapper">
                <Suspense fallback={<div>Загрузка твитов...</div>}>
                        <Tweets />
                </Suspense>
            </div>
        </div>
    )
}