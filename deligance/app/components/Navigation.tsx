import Link from 'next/link';
import '../CSS/Navigation.css';

export default function Navigation() {
    return (
        <div className="menuContainer">
            <ul className="menuItems">
                <li><Link href="/ProjectForm"><a>View Projects</a></Link></li>
                <li><Link href="/feedback"><a>Submit Feedback</a></Link></li>
                <li><Link href="/about"><a>About Us</a></Link></li>
                <li><Link href="/contact"><a>Contact Us</a></Link></li>
                <li><Link href="/login"><a>Login</a></Link></li>
                <li><Link href="/signup"><a>Sign Up</a></Link></li>
                {/* Add more menu items as needed */}
            </ul>
        </div>
    );
}
