import React from "react";
import '../styles/p-template.css';

class ProductTemplate extends React.Component {
    constructor(props){
        super(props)
    }
    handleClick(){
        window.location.href = "/products/sweatshirts";
    }
    render(){
        return (
            <div className="p-template-container" >
                <div onClick={this.handleClick}><img src={this.props.imgSrc} /></div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
export default ProductTemplate;