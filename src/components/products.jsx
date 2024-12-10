import React from "react";
import '../styles/products.css';
import ProductTemplate from "./p-template";
import caps from '../img/cameamile-d3 caps.png';
import topsImg from '../img/cameamile-d3 tops & sweatshirts.png';
import shoppersImg from '../img/cameamile-d3 shoppers.png';


class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: {
                day: 1,
                month: 12,
                year: 1403,
            },
        }
    
    }
    componentDidMount(){
        const monthChange = {
            1: 'January',
            2: 'February',
            3: 'March',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'August',
            9: 'September',
            10: 'October',
            11: 'November',
            12: 'December',
        }
        let date = new Date();
        console.log(date);
        let day = date.getDate();
        let month = monthChange[(date.getMonth()+1)];
        let year = date.getFullYear();
        this.setState((state)=>{
            return state.date = {
                day: day,
                month: month,
                year: year,
            }
        });
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
            <div className="p-date-cont">
                <p>Today's Date</p>
                <hr></hr>
                <p>Day: <span> {this.state.date.day}</span></p>
                <p>Month: <span> {this.state.date.month}</span></p>
                <p>Year: <span> {this.state.date.year}</span></p>
            </div>
        </div>
        </>
        )
    }
}

export default Products;