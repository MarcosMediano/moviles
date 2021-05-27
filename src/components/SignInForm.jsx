import React, { Component } from "react"
import './style/SignInForm.css'

class SignInForm extends Component{
    render(){
        return(
            <div className="SignForm m-5">
                <form>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
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
                            Cellphone Number
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
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                        <button type="submit" className="SignIn__button">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;