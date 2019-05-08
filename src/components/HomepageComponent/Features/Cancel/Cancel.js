import React from "react";
import cancelImage from './icons/cancel.png';

const Cancel = () => {
    return(
        <section className="cancleWrapper">
            <div className="cancelcolumns">
                <div className="cancelcolumn">
                    <h2>If you decide Netflix isn't for you - No problem. No Commitment. Cancel online anytime.</h2>
                    <button>Join free for a month</button>
                </div>
                <div className="cancelcolumn">
                    <img src={cancelImage} alt="Cancel Subscription anytime" />
                </div>
            </div>
        </section>
    )
}

export default Cancel;