import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import BadgeForm from "../../components/BadgeForm"
import "./NewBadge.css"

class NewBadge extends React.Component{

    state={
        loading :false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            post:""
        }
    }

    handleChange=event=>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value,
            }
        })
        
    }
    handleSubmit =async(event)=>{
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"} foto={"https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                profile_picture={this.state.form.profile_picture || "https://images.pexels.com/photos/3229336/pexels-photo-3229336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                header_picture={this.state.form.header_picture || "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                name={this.state.form.name || "Janet Williams "}
                                age={this.state.form.age || "21"}
                                city={this.state.form.city || "Tokyo Japan"}
                                followers={this.state.form.followers || "120k"}
                                likes={this.state.form.likes || "3M"}
                                post={this.state.form.post || "420"}
                            ></Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}>    
                            </BadgeForm>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default NewBadge;