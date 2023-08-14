import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="register">
        <div className="card">
            <div className="left">
                <h1>Hello! Welcome</h1>
                <p>We use stylelint to 
                check for style guide conformity. It uses the ruleset in .stylelintrc 
                and rules from our SCSS configuration. .stylelintrc is located in the home
                 directory of the project.</p>
                 <span>Do you have an account?</span>
                 <Link to="/login">
                 <button>Login</button>
                 </Link>
            </div>

        <div className="right">
            <h1>Register</h1>
            <form>
            <input type="text" placeholder="FirstName"></input>
            <input type="text" placeholder="LastName"></input>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button>Register</button>
        </form>
        </div>
        </div>
        </div>
    );    
}
export default Register;