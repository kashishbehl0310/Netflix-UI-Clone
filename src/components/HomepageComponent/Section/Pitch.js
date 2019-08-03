import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Pitch extends Component{
    render(){
        return(
            <section className="pitchSection">
                <h1>See what's next</h1>
                <p>WATCH ANYWHERE. CANCEL ANYTIME.</p>
                <Link className="button" to="/signin">JOIN FREE FOR A MONTH</Link>
            </section>
        )
    }
}

export default Pitch;