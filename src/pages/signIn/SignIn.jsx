import React from "react"
import Hero from "../../components/Hero"
import SignInForm from "../../components/SignInForm"

class SignIn extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"} foto={"https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <SignInForm></SignInForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SignIn;