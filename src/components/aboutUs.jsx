import React from "react";
import banner from '../img/aboutus-bnr.png';
import '../styles/aboutus.css';

class AboutUs extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <main class="aboutus-main-cont">

        <div class="au-desc-cont">
            <div class="au-main-desc-cont">
                <h3>Discover the Clean<br></br> World with Cameamile.</h3>
                <p>we will be happy to answer the question you may have.to consider your offer to cooperation you can write us an email.fill your life with conscious consumption of the planet's resources.</p>
            </div>
            <footer class="au-footer">
                <div><h4>Phone</h4>
                    <ul>
                    <li>+7 (800) 563-63-63</li>
                    <li>+7 (800) 450-50-40</li>

                </ul></div>
                <div ><h4>Address</h4>
                    <ul>
                    <li>kamanina street ,59 , moscow, moscow region, 22042</li>
                    <li></li>

                </ul></div>
                <div data-last-child="true"><h4>E-mail</h4>
                    <ul>
                    <li>cameamile@gmail.com</li>
                    

                </ul></div>
            </footer>
        </div>
        <div class="banner-cont"><img src={banner} alt="a woman with cameamile bags."></img></div>

    </main>
        )
    }
}

export default AboutUs;