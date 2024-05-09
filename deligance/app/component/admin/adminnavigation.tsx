import Link from 'next/link';
import '../../../CSS/navigation.css';
export default function Navigation() {
    return (
        <><div className='abs'></div>
         <div className="menuContainer">
            <ul className="menuItems">
            <li><Link href="./AdminHome" legacyBehavior><a>Home</a></Link></li>
                <li><Link href="./pendingstatus" legacyBehavior><a>Pending</a></Link></li>
                <li><Link href="./rejectedprojects" legacyBehavior><a>RejectedProjects</a></Link></li>
                <li><Link href="./Acceptedproject" legacyBehavior><a>AcceptProject</a></Link></li>
                <li><Link href="./projecttable" legacyBehavior><a>Projects</a></Link></li>
                <li><Link href="./feedbacksee " legacyBehavior><a>Feedback Display</a></Link></li>
                <li><Link href="./feedback" legacyBehavior><a>GiveFeedback</a></Link></li>

            </ul>
        </div></>
       
    );
}
