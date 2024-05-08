import Link from 'next/link';
import '../../../CSS/navigation.css';
export default function Navigation() {
    return (
        <><div className='abs'></div>
         <div className="menuContainer">
            <ul className="menuItems">
            <li><Link href="./AdminHome" legacyBehavior><a>Home</a></Link></li>
                <li><Link href="./pendingstatus" legacyBehavior><a>Pending</a></Link></li>
                <li><Link href="./rejectproject" legacyBehavior><a>RejectedProjects</a></Link></li>
                <li><Link href="./projecttable" legacyBehavior><a>Projects</a></Link></li>
                <li><Link href="./feedbackstatus" legacyBehavior><a>Givefeedback</a></Link></li>

            </ul>
        </div></>
       
    );
}
