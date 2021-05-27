import React, { Component } from "react"
import './style/LoginForm.css'

class LoginForm extends Component{
    render(){
        return(
            <div className="LoginForm m-5">
                <form>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            E-Mail
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                        />
                    <button type="submit" className="Login__button">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;