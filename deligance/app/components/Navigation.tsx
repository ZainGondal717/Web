import Link from 'next/link';
import '../CSS/Navigation.css';
export default function Navigation() {
    return (
        <div className="menuContainer">
            <ul className="menuItems">
                <li><Link href="../components/projectform" legacyBehavior><a>Project Form</a></Link></li>
                <li><Link href="../components/feedback" legacyBehavior><a>Submit Feedback</a></Link></li>
                <li><Link href="../components/errornotification" legacyBehavior><a>Error</a></Link></li>
                <li><Link href="../components/projecttable" legacyBehavior><a>Projects</a></Link></li>
                <li><Link href="../components/login" legacyBehavior><a>Login</a></Link></li>
                <li><Link href="../components/signup" legacyBehavior><a>Sign Up</a></Link></li>
                <li><Link href="../components/feedbackdisplay" legacyBehavior><a>Feedbacks</a></Link></li>
                <li><Link href="../components/successfulnotification" legacyBehavior><a>Success</a></Link></li>
            </ul>
        </div>
    );
}
