import React, { Component } from "react";
import ReactDOM from "react-dom";
import './styles/App.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features'
import './styles/index.scss';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Header />
                <Features />
                <Footer />
            </div>
        )
    }
}
const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)