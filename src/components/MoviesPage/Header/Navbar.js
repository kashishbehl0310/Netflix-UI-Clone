import React, { Component } from "react";
import Search from './search';
import netflixlogo from '../../../img/download.svg';

export default class Navbar extends Component{
    render(){
        return(
            <nav>
                <div className="search-bar">
                    <Search />
                </div>
            </nav>
        )
    }
}