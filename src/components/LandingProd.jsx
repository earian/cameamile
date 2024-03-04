import React from "react";

class LandingProduct extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div><img src={this.props.imgSrc} alt=""></img><p>{this.props.prodTitle}</p></div>
        )
    }
}

export default LandingProduct;