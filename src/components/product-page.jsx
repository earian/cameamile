import React from "react";
import banner from '../img/p-p-img/p-p-banner.png';
import first from '../img/p-p-img/p-p-first-carocell.png';
import EnquireCont from "./enq-container";
import '../styles/productPage.css';


class ProductPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product : {
                name: 'Sweatshirt',
                color: 'Green',
                dropDate: `Spring Drop '21`,
                price: 64.99,
                size: 'XS',
            },
        }
        this.handleSizeClick = this.handleSizeClick.bind(this);
        this.handleColor = this.handleColor.bind(this);

    }
    handleColor(){
        const slctdIndex = document.getElementById('p-color-selector').selectedIndex;
        const colorArr = ['Green','Blue','Red'];
        this.setState((state)=> state.product.color = colorArr[slctdIndex]);
    }
    handleSizeClick(e){
        const sizeCont = document.getElementsByClassName('size-cont')[0];
        if(e.target == sizeCont || e.target == sizeCont.firstChild) return 
        const sizes = sizeCont.firstChild.childNodes;
        const priceTag = document.getElementsByClassName('price-tag')[0];
        sizes.forEach(size =>{
            size.classList.remove('selected-size');
            e.target.classList.add('selected-size');
        })
        if(e.target.dataset.size == 'L' || e.target.dataset.size == 'XL'){
            this.setState((state)=>{
              return  state.product.price = 65.99;
            });
       }else if(this.state.product.price == 65.99){
            this.setState((state)=>{
              return  state.product.price = 64.99;
            });
       }
       this.setState((state)=>{
            return this.state.product.size = e.target.dataset.size;
       })
    }
    
    render(){
        return (
            <>
            <main className="main-cont">
        <div className="m-divs m-banner">
    <img src={banner} alt="a girl in the CAME A MILE's green sweatshirt" srcset=""></img>
        </div>
        
        <div className="m-divs m-content">
            <div className="main-title">
                <h2>Green Sweatshirt <br></br> Spring Drop '21</h2>
                <div className="main-desc-cont">
                <p className="price-p">&#36; <span className="price-tag p-tags">{this.state.product.price}</span> (Inclusive of all taxes)</p>
                <p className="m-desc">Soft jersey for the sweatshirts. organic cotton.Grown with less water and no pesticides. there are no loser here: preserving wildlife and improving condition for the cotton growers.composition: 95% organic cotton, 5% elastane. care: Machine wash and dry the sweatshirt according to the instructions on the label.</p>                   
                 </div> 
                    <div className="select-cont">
                        <div className="color-selector">
                            <label for="color" className="color-selector-label selector-labels">Color:</label>
                            <select name="color" id="p-color-selector" className="color-selector-select" onChange={this.handleColor}>
                                <option value="Green">Green</option>
                                <option value="Blue">Blue</option>
                                <option value="Red">Red</option>
                            </select>

                            <div className="size-selector">
                                <p className="size-selector-label selector-labels">Size:</p>
                                <div className="size-cont" onClick={this.handleSizeClick}>
                                    <ul>
                                        <li className="selected-size" data-size="XS">XS</li>
                                        <li data-size="S">S</li>
                                        <li data-size="M">M</li>
                                        <li data-size="L">L</li>
                                        <li data-size="XL">XL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <input type="button" value="Enquire" className="enq-btn" onClick={()=>{
                        document.getElementById('enquire-container').style.display = 'flex';
                    }}></input>
                    <EnquireCont imgSrc={banner} price={this.state.product.price} color={this.state.product.color}
                    name={this.state.product.name} date={this.state.product.dropDate}
                    size={this.state.product.size}/>
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

    
            </>
        )
    }
}

export default ProductPage;