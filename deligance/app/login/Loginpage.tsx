import '../CSS/login.css';
export default  function LoginPage()
{
    return(
        <div className="login-page">
        <h2>Login</h2>
        <form >
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
        <div className="signup-link">
            <p>Don`t have an account?</p>
            <button >Sign Up</button>
        </div>
    </div>
    );
}



