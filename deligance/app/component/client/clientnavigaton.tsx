import Link from 'next/link';
import '../../../CSS/navigation.css';

export default function Navigationclient() {
    return (<>
    <div className="abs">

</div>
    <div className="menuContainer">
        <ul className="menuItems">
            <li><Link href="./Clienthome" legacyBehavior><a>Home</a></Link></li>
            <li><Link href="./projectparposal" legacyBehavior><a>Project Parposal</a></Link></li>
            <li><Link href="./projecttable" legacyBehavior><a>Projects</a></Link></li>
            <li><Link href="./feedbacksee" legacyBehavior><a>Feedbacks</a></Link></li>
        </ul>
    </div>
    </>
    );
}
