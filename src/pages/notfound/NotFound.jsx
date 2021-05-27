import React from "react"
import Hero from "../../components/Hero"
import './NotFound.css'

class NotFound extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"} foto={"https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Hero>
                <div className="Found">
                <img className="NotFound__img" src="https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg"></img>
                </div>
                
                        
            </React.Fragment>
        );
    }
}

export default NotFound;