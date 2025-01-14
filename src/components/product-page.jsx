import { useState } from "react";
import banner from '../img/p-p-img/p-p-banner.png';
import first from '../img/p-p-img/p-p-first-carocell.png';
import EnquireCont from "./enq-container";
import '../styles/productPage.css';

const sizesArr = ['XS','S','M','L','XL','XXL'];
const colorsArr = ['Green' ,'Blue' ,'Red' ,'Navy' ,'Light Green'];

export default function ProductPage() {
    const [sizeInd ,setSizeInd] = useState(0);
    const [product ,setProduct] = useState({
        name: 'Sweatshirt',
        color: 'Green',
        dropDate: `Spring Drop '21`,
        price: 64.99,
        size: 'XS',
    })
    function handleColor(e){
        const newColor = e.target.value;
        setProduct({...product ,color: newColor});
    }
    function handleSizeClick(e){
        const slctdSize = e.target.attributes.value.nodeValue;
        const slctdInd = sizesArr.indexOf(slctdSize);
        let newPrice = 64.55;
        if(slctdSize == 'L' || slctdSize == 'XL') newPrice = 65.55;
        else if(slctdSize == 'XXL') newPrice = 66.55;
        setSizeInd(slctdInd);
        setProduct({...product,size: slctdSize ,price: newPrice});
        }

        return (
            <>
    <main className="main-cont">
        <div className="m-divs m-banner">
            <img src={banner} alt="a girl in the CAME A MILE's green sweatshirt" srcSet=""></img>
        </div>
        
        <div className="m-divs m-content">
            <div className="main-title">
                <h2>Green Sweatshirt <br></br> Spring Drop '21</h2>
                <div className="main-desc-cont">
                <p className="price-p">&#36; <span className="price-tag p-tags">{product.price}</span> (Inclusive of all taxes)</p>
                <p className="m-desc">Soft jersey for the sweatshirts. organic cotton. Grown with less water and no pesticides. there are no loser here: preserving wildlife and improving condition for the cotton growers. composition: 95% organic cotton, 5% elastane. care: Machine wash and dry the sweatshirt according to the instructions on the label.</p>                   
                 </div> 
                    <div className="select-cont">
                        <div className="color-selector">
                            <label htmlFor="color" className="color-selector-label selector-labels">Color:</label>
                            <select name="color" id="p-color-selector" className="color-selector-select"  onChange={(e)=> handleColor(e)}>
                                {colorsArr.map((color ,ind)=> <option value={color} key={ind}>{color}</option>)}
                            </select>

                            <div className="size-selector">
                                <p className="size-selector-label selector-labels">Size:</p>
                                <div className="size-cont">
                                    <ul>
                                        {sizesArr.map((size ,ind)=> {
                                            if(ind === sizeInd) {
                                                return <li value={size} key={ind} className="selected-size" onClick={(e)=> handleSizeClick(e)}>{size}</li>
                                            } else {
                                                return <li value={size} key={ind} onClick={(e)=> handleSizeClick(e)}>{size}</li>
                                            }
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <input type="button" value="Enquire" className="enq-btn" onClick={()=>{
                        document.querySelector('body').style.overflow = 'hidden';
                        document.getElementById('enquire-container').style.display = 'flex';
                    }}></input>
            </div>
            
            <div className="item-carocell">

           
            <div className="items-date-cont">
                <div className="arrow-up">
                    <div className="nok-bala"></div>
                    <div className="dasteh"></div>
                </div>
                <div className="item-date">
                    <span className="current-date">02</span>
                </div>
                <div className="arrow-down">
                    <div className="dasteh"></div>
                    <div className="nok-paeen"></div>
                </div>
            </div>
            
            <div className="items-cont">
                <div><img src={first} alt=""></img><p>Spring Cap '21</p></div>
                <div><img src="p-p-img/p-p-second-carocell.png" alt=""></img><p>Shopper '21</p></div>
                <div><img src="p-p-img/p-p-third-carocell.png" alt=""></img><p>Spring Shirt '21</p></div>
            </div> 
        </div>
        </div>
    </main>
                
    <EnquireCont imgSrc={banner} product={product}/>
    
            </>
        )
}