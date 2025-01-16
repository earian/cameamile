import { useEffect, useState } from "react";
import '../styles/products.css';
import ProductTemplate from "./p-template";

const caps = '/images/products/Medium-size/cap1.png';
const sweaterImg = '/images/products/Thumbnail/sweater1.png';
const shoppersImg = '/images/products/Medium-size/shopper1.png';
const topsImg = '/images/products/Medium-size/t-shirt1.png';

const productsCat = [
    {id: 0 ,imgUrl: caps ,name: 'Caps'},
    {id: 1 ,imgUrl: sweaterImg ,name: 'Sweatshirts'},
    {id: 2 ,imgUrl: shoppersImg ,name: 'Shoppers'},
    {id: 3 ,imgUrl: topsImg ,name: 'Tops'}
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