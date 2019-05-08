import React, {Component} from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Features from './Features/Features';

class Home extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <Header/>
                <Features />
                <Footer />
            </div>
        )
    }
}

export default Home;