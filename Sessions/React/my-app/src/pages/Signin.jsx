import { useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate()

    function handleSubmit() {
        navigate("/")
    }

    return(
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-header">Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="btn">
                    Login
                </button>
            </form>
        </div>
        )
}

export default Signin;