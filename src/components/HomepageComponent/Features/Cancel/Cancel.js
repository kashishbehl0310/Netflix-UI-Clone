import React from "react";
import { Link } from "react-router-dom";
import cancelImage from './icons/cancel.png';

const Cancel = () => {
    return(
        <section className="cancleWrapper">
            <div className="cancelcolumns">
                <div className="cancelcolumn">
                    <h2>If you decide Netflix isn't for you - No problem. No Commitment. Cancel online anytime.</h2>
                    <Link className="button" to="/signin" >Join free for a month</Link>
                </div>
                <div className="cancelcolumn">
                    <img src={cancelImage} alt="Cancel Subscription anytime" />
                </div>
            </div>
        </section>
    )
}

export default Cancel;