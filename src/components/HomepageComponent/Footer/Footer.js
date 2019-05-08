import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <p>Questions? Contact Us.</p>
                <ul>
                    <li><a><span>FAQ</span></a></li>
                    <li><a><span>Help Center</span></a></li>
                    <li><a><span>Account</span></a></li>
                    <li><a><span>Media Center</span></a></li>
                    <li><a><span>Invester Relations</span></a></li>
                    <li><a><span>Jobs</span></a></li>
                    <li><a><span>Ways to Watch</span></a></li>
                    <li><a><span>Terms of Use</span></a></li>
                    <li><a><span>Privacy</span></a></li>
                    <li><a><span>Cookie Preferences</span></a></li>
                    <li><a><span>Corporate Information</span></a></li>
                    <li><a><span>Contact Us</span></a></li>
                    <li><a><span>Speed Test</span></a></li>
                    <li><a><span>Netflix Originals</span></a></li>
                    <br />
                </ul>
                <br />
                <p className="footerSmall">Netflix India</p>
            </footer>
        )
    }
}

export default Footer;