import React, {Component} from 'react' 
import HeaderBackground from '../images/badge_header.jpg'
import ProfilePic from '../images/profile.jpg'
import "./style/Badge.css"

class Badge extends Component{
    render(){
        return (
        <React.Fragment>
            <div className="Badge m-5">
                <div className="Badgeheader">
                    <img src={this.props.header_picture} alt="header_background"/>
                </div>
                <div className="container mt-5 mb-1 BadgeuserInfo">
                    <div className="BadgeuserImage">
                        <img src={this.props.picture} alt="Profile_picture" />
                    </div>
                    <h4 className="text-center">{this.props.name}<i>{this.props.name}</i></h4>
                    <p className="text-center">{this.props.city}</p>
                </div>
                <div className="Badgeinfo container pt-3">
                    <div className="row">
                        <div className="col">
                            <h4 className="text-center fw bold">{this.props.followers}</h4>
                            <p className="text-center">Followers</p>
                        </div>
                        <div className="col">
                            <h4 className="text-center fw bold">{this.props.likes}</h4>
                            <p className="text-center">Likes</p>
                        </div>
                        <div className="col">
                            <h4 className="text-center fw bold">{this.props.post}</h4>
                            <p className="text-center">Pictures</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}
export default Badge;