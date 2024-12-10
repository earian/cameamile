import React from "react";
import LandingProduct from "./LandingProd";
import { Link } from 'react-router-dom';


class MainLanding extends React.Component {
    constructor(props){
        super(props)
    }
    handleClick(){
        window.location.href = '/products';
    };
    componentDidMount(){
        let windowHeight = window.innerHeight;
        let headerHeight = document.querySelector('.header').offsetHeight;
        const prodHeight = (windowHeight - headerHeight);
        document.documentElement.style.setProperty('--initial-product-height',`${prodHeight}px`)
    }
    render(){
        return (
        <main class="main-container">
        <div class="main-divs main-banner">
            <img src="../../img/main-banner.png" alt="a man with his shops!" srcset=""></img>
        </div>
        
        <div class="main-divs main-content">
            <div class="main-landing-title">
                <h2>Spring '21 <br></br>
                    Collection</h2>
                <p>The entire collection created from recycled material.it contains no synthetic ,wich makes things wearable in all weathers. The fine design of the spring collection is definitely a part of your wardrobe.</p>
                <div class="m-continue" ><Link to={`/products`}>See more</Link>
                    <div class="right-arrow" onClick={this.handleClick}>
                        <div class="main-dasteh"></div>
                        <div class="nok"></div>
                    </div>
                </div>
            </div>
            <div class="main-items-cont">
                <LandingProduct imgSrc={"../../img/cameamile-d3 tops & sweatshirts.png"} prodTitle={'tops & sweatshirts'} />
                <LandingProduct imgSrc={"../../img/cameamile-d3 shoppers.png"} prodTitle={"Shoppers"} />
                <LandingProduct imgSrc={"../../img/cameamile-d3 caps.png"} prodTitle={"Caps"} />
            </div>
        </div>
    </main>
    )
    }
}
export default MainLanding;