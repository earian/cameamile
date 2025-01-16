import { Link } from 'react-router-dom';
import LandingProduct from "./LandingProd";

const banner = '/images/banner/main.png';

const Products = [
    {
        imgUrl: '/images/products/Thumbnail/sweater1.png',
        title: 'tops & sweatshirts',
    },
    {
        imgUrl: '/images/products/Medium-size/shopper1.png',
        title: 'Shoppers',
    },
    {
        imgUrl: '/images/products/Medium-size/cap1.png',
        title: 'Caps',
    },
];

export default function MainLanding (props) {
    function handleClick(){
        window.location.href = '/Category';
    };
        return (
        <main class="main-container">
        <div class="main-divs main-banner">
            <img src={banner} alt="a man with his shops!" srcset=""></img>
        </div>
        
        <div class="main-divs main-content">
            <div class="main-landing-title">
                <h2>Spring '21 <br></br>
                    Collection</h2>
                <p>The entire collection created from recycled material.it contains no synthetic ,wich makes things wearable in all weathers. The fine design of the spring collection is definitely a part of your wardrobe.</p>
                <div class="m-continue" ><Link to={`/Category`}>See more</Link>
                    <div class="right-arrow" onClick={handleClick}>
                        <div class="main-dasteh"></div>
                        <div class="nok"></div>
                    </div>
                </div>
            </div>
            <div class="main-items-cont">
                {Products.map((product ,ind)=> <LandingProduct imgSrc={product.imgUrl} title={product.title} key={ind}/>)}
            </div>
        </div>
    </main>
    )
}
(function calcHeight(){
        let windowHeight = window.innerHeight;
        let headerHeight = document.querySelector('.header').offsetHeight;
        const prodHeight = (windowHeight - headerHeight);
        document.documentElement.style.setProperty('--initial-product-height',`${prodHeight}px`)
}())