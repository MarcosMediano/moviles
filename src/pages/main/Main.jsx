import React from "react"
import Hero from "../../components/Hero"
import Button from "../../components/MainButton"
import "./Main.css"

const Main=(props) =>{
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Welcome"}</h1>
                    <Button contentText={"Lets Start"} link={"/new"}></Button>
                </div>
                <Hero h={"88vh"} foto={"https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Hero>
            </div>
        </React.Fragment>
    );
}

export default Main;