import Tab from './Tab';
import '../style/Main.css'
import Tweets from './Tweets';

export default function Main() {
    return (
        <div className='Main'>
            <Tab />
            <div className="tweets-wrapper">
                <Tweets />
            </div>
        </div>
    )
}