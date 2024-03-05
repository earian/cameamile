import React from "react";
import '../styles/products.css';
import ProductTemplate from "./p-template";
import caps from '../img/cameamile-d3 caps.png';
import topsImg from '../img/cameamile-d3 tops & sweatshirts.png';
import shoppersImg from '../img/cameamile-d3 shoppers.png';
import { useEffect } from "react";

class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: 111111,
        }
    }
    render(){
        return (
        <>
        <div className="products-left">
        <h2  onClick={this.getDate}>Products</h2>
        <div className="p-items">
            <ProductTemplate imgSrc={caps} name={'Caps'}/>
            <ProductTemplate imgSrc={topsImg} name={'Sweatshirts'}/>
            <ProductTemplate imgSrc={shoppersImg} name={'Shoppers'}/>
            <ProductTemplate imgSrc={caps} name={'Tops'}/>
        </div>
        </div>
        <div className="product-right">
            
        </div>
        </>
        )
    }
}

export default Products;