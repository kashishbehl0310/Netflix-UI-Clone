import React, {Component} from 'react';
import GoX from 'react-icons/lib/go/x';
import GoCheck from 'react-icons/lib/go/check';

class Price extends Component {
    constructor(){
        super();
        this.state = {
            width: innerWidth
        }
    }

    componentWillMount(){
        window.addEventListener('resize', this.handleWindowSizeChange)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }
    handleWindowSizeChange(){
        this.setState({
            width: window.innerWidth
        })
    }

    render(){
        const  { width } = this.state;
        const isMobile = width <= 700;
        if(isMobile){
            return(
                <div className="priceWrapper">
                    <div className="priceHeader">
                        <h2>Choose one plan and watch everything on Netflix</h2>
                        <button>Join free for a month</button>
                    </div>
                    <table className="priceTable">
                        <thead>
                            <tr>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Monthly Price after free months ends on 25/04/19</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="bold">Rs. 300</td>
                                <td className="bold">Rs. 400</td>
                                <td className="bold">Rs. 500</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>HD Available</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><GoX /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Ultra HD Available</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><GoX /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Screens you can watch at the same time</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Unlimited movies and TV shows</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Cancel Anytime</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>First month free</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return(
                <div className="priceWrapper">
                    <div className="priceHeader" >
                        <h2>Choose one plan and watch everything on Netflix.</h2>
                        <button>JOIN FREE FOR A MONTH</button>
                    </div>
                    <table className="priceTable">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly price after free trial ends on 25/04/19</td>
                                <td>Rs. 300</td>
                                <td>Rs. 400</td>
                                <td>Rs. 500</td>
                            </tr>
                            <tr>
                                <td>HD Available</td>
                                <td><GoX /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td>Ultra HD Available</td>
                                <td><GoX /></td>
                                <td><GoX /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td>Screens you can watch at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, phone, TV and tablet</td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                            <tr>
                                <td>First month free</td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                                <td><GoCheck /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default Price;