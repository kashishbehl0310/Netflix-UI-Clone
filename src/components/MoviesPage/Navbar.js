import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import netflixlogo from '../../img/download.svg';
import jwt_decode from 'jwt-decode';
import Search from './Search';
import Avatar from '../../img/Avatar-Transparent-Image.png'

class HeaderNav extends Component{
    // parseJWT(token){
    //     if(!token){
    //         return;
    //     }
    //     const base64url = 
    // }
    constructor(props){
        super(props);
        this.state={
            user: {}
        }
    }
    getCurrentUser(){
        const cuurent_user = jwt_decode(localStorage.getItem('jwtToken'), {header: false})
        return cuurent_user;
    }
    componentDidMount(){
        this.setState({
            user: this.getCurrentUser()
        })
    }
    render(){
        const {
            value,
            searchMovies,
            showResponse,
            handleChange
        } = this.props;
        return(
            <div>
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href="/" >
                        <img className="Nlogo" src={netflixlogo} />
                    </Navbar.Brand>
                    <Nav className="mr-auto navLinks" >
                        <Nav.Link style={{color: "#fff"}} >Home</Nav.Link>
                        <Nav.Link style={{color: "#fff"}} >Movies</Nav.Link>
                        <Nav.Link style={{color: "#fff"}} >Series</Nav.Link>
                        <Nav.Link style={{color: "#fff"}} >My List</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown
                            title={this.state.user.name}
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <div className="search-Bar">
                        <Search 
                            value={value}
                            searchMovies={searchMovies}
                            showResponse={showResponse}
                            handleChange={handleChange}
                        />
                    </div> */}
                </Navbar>
            </div>
        )
    }
}

export default HeaderNav;