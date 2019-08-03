import React, {Component} from 'react';
import { Navbar, Nav} from "react-bootstrap";
import netflixlogo from '../../img/download.svg';
import Search from './Search';

class HeaderNav extends Component{
    constructor(props){
        super(props);
        this.state={
            user: {}
        }
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
                        <Nav.Link style={{color: "#fff"}} href="/mylist" >My List</Nav.Link>
                    </Nav>
                    <div className="search-Bar">
                        <Search 
                            value={value}
                            searchMovies={searchMovies}
                            showResponse={showResponse}
                            handleChange={handleChange}
                        />
                    </div>
                    <Nav>
                        <Nav.Link style={{color: "#fff"}}  onClick={this.props.handleLogout} >Sign Out</Nav.Link>
                        {/* <NavDropdown
                            title={this.props.user.name}
                            id="collasible-nav-dropdown"
                        >
                        </NavDropdown> */}
                    </Nav>
                    
                </Navbar>
            </div>
        )
    }
}

export default HeaderNav;