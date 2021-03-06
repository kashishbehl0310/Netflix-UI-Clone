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
import Mylist from './components/MoviesPage/Mylist'
import MovieSlider from './components/MoviesPage/MovieSlider';
import MovieParent from './components/MoviesPage/movieParent';
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
                        />} 
                    >
                    </Route>
                    <Route
                        exact
                        path="/signup"
                        component={() => <Signup 
                            signInRendered = {true}
                            history={history}
                        />}
                    />
                    <Route 
                        exact
                        path="/home"
                        component={MoviesPage}
                    >
                    </Route> 
                    <Route
                        exact
                        path="/mylist"
                        component={Mylist}
                    >
                    </Route>
                    {/* <Route
                        exact
                        path="/slider"
                        component={MovieParent}
                    >
                    </Route>                     */}
                </div>
            </BrowserRouter>
            
        )
    }
}
const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)