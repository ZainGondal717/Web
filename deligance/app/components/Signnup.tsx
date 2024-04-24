import '../CSS/signup.css';
export default function SignUpPage()
{
    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            <form >
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"  />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}


