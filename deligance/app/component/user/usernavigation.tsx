import Link from 'next/link';
import '../../../CSS/navigation.css';
export default function Navigation() {
    return (
        <><div className='abs'></div>
         <div className="menuContainer">
            <ul className="menuItems">
            <li><Link href="./UserHome" legacyBehavior><a>Home</a></Link></li>
                <li><Link href="./feedback" legacyBehavior><a>Submit Feedback</a></Link></li>
                <li><Link href="./projecttable" legacyBehavior><a>Projects</a></Link></li>    
            </ul>
        </div></>
       
    );
}
