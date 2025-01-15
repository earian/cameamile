import { useState } from "react";

export default function SizeSelector({ sizes ,handleSelectedSize }){
    const [slctdIndex ,setSlctdIndex] = useState(0);
    function handleClick(e){
        const slctdSize = e.target.dataset.size;
        const slctdInd = sizes.indexOf(slctdSize);
        setSlctdIndex(slctdInd);
        handleSelectedSize(slctdSize);
    }
    return (
        <div className="size-selector">
                <p className="size-selector-label selector-labels">Size:</p>
                    <div className="size-cont">
                        <ul>
                            {sizes.map((size ,ind)=> {
                                if(ind == slctdIndex) {
                                   return <li data-size={size} key={ind} className="selected-size" onClick={(e)=> handleClick(e)}>{size}</li>
                                } else {
                                   return <li data-size={size} key={ind} onClick={(e)=> handleClick(e)}>{size}</li>
                                }
                            })}
                        </ul>
                    </div>
            </div>
    )
}