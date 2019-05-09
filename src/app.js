import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route} from "react-router-dom";
import './styles/App.scss';
import Home from './components/HomepageComponent/Homepage';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import './styles/index.scss';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    render(){
        return(
            <BrowserRouter>
                <div className="App">
                    <Route 
                        exact 
                        path="/" 
                        component={Home} 
                    >
                    </Route>
                    <Route 
                        exact 
                        path="/signin" 
                        component={() => <Login 
                            isLoggedIn = {this.state.isLoggedIn}
                            signInRendered = {true}
                        />} 
                    >
                    </Route>
                    <Route
                        exact
                        path="/signup"
                        component={() => <Signup 
                            signInRendered = {true}
                        />}
                    >
                    </Route>                      
                </div>
            </BrowserRouter>
            
        )
    }
}
const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)