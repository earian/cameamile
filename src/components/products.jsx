import { useEffect, useState } from "react";
import '../styles/products.css';
import ProductTemplate from "./p-template";
import caps from '../img/cameamile-d3 caps.png';
import topsImg from '../img/cameamile-d3 tops & sweatshirts.png';
import shoppersImg from '../img/cameamile-d3 shoppers.png';

const productsCat = [
    {id: 0 ,imgUrl: caps ,name: 'Caps'},
    {id: 1 ,imgUrl: topsImg ,name: 'Sweatshirts'},
    {id: 2 ,imgUrl: shoppersImg ,name: 'Shoppers'},
    {id: 3 ,imgUrl: '' ,name: 'Tops'}
];

export default function Products(props) {
    const time = useTime();
    const date = time.toDateString().split(' ');

        return (
        <>
        <div className="products-left">
        <h2>Products</h2>
        <div className="p-items">
            {productsCat.map((product)=> <ProductTemplate imgSrc={product.imgUrl} name={product.name} key={product.id}/>)}
        </div>
        </div>
        <div className="product-right">
            <div className="p-date-cont">
                <p>Today's Date</p>
                <hr></hr>
                <p>Day: <span> {date[2]}</span></p>
                <p>Month: <span> {date[1]}</span></p>
                <p>Year: <span> {date[3]}</span></p>
                <hr />
                <p>{time.toLocaleTimeString()}</p>
            </div>
        </div>
        </>
        )
    }


function useTime(){
    const [time ,setTime] = useState(()=> new Date());
    useEffect(()=>{
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return ()=> clearInterval(id);
    }, []);
    return time;
}