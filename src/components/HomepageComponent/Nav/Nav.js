import React, {Component} from 'react';
import { Link } from "react-router-dom";
import netflixlogo from '../../../img/download.svg';

// const Button = styled.button`
    
//     ${props => props.right && css`
//         float: right;
//     `}
//     &:hover {
//         background-color: #E53935;
//     }
// `


class Nav extends Component{
    
    render(){
        return(
            <nav>
                <a href={"/"} className="logo">
                    <img className="img" src={netflixlogo} alt="Netflix" />
                </a>
                { (!this.props.signInRendered)? <Link className="signInButton" to="/signin">Sign In</Link> : ''}
            </nav>
        )
    }
}

export default Nav;