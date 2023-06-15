import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello! Welcome back</h1>
                <p>We use stylelint to 
                check for style guide conformity. It uses the ruleset in .stylelintrc 
                and rules from our SCSS configuration. .stylelintrc is located in the home
                 directory of the project.</p>
                 <span>Do you have an account?</span>
                 <Link to="/register">
                 <button>Register</button>
                 </Link>
            </div>

        <div className="right">
            <h1>Login</h1>
            <form>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Login</button>
        </form>
        </div>
        </div>
        </div>
    );    
}
export default Login;
 