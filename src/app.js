import React, { Component } from "react";
import ReactDOM from "react-dom";
import createBrowserHistory from "history/createBrowserHistory"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route} from "react-router-dom";
const history = createBrowserHistory();
import './styles/App.scss';
import Home from './components/HomepageComponent/Homepage';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import MoviesPage from "./components/MoviesPage/index";
import MovieSlider from './components/MovieSlider';
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
            <BrowserRouter >
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
                            history={history}
                        />} 
                    >
                    </Route>
                    <Route
                        exact
                        path="/signup"
                        history={history}
                        component={() => <Signup 
                            signInRendered = {true}
                            history={history}
                        />}
                    >
                    <Route 
                        exact
                        path="/home"
                        component={MoviesPage}
                    />
                    </Route> 
                    <Route
                        exact
                        path="/slider"
                        component={MovieSlider}
                    >
                    </Route>                     
                </div>
            </BrowserRouter>
            
        )
    }
}
const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)