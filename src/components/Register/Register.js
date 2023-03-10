import "./style.css";
import React from "react";

export class Register extends React.Component {
    render() {
        return (
            <div className="login">
                <form>
                    <h2>Sign In</h2>
                    <div className="input">
                        <input type="text" required="required" />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="input">
                        <input type="text" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <a href="/register">Forgot Password</a>
                        <a href="/register">SignUp</a>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}


