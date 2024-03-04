import React from "react";
import '../styles/enquiryPopup.css'

class EnquireCont extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <div class="pop-cont enquiry-main-cont" id='enquire-container'>
                <div class="enquiry-cont">
                <h3>Online Enquiry</h3>
            <span class="closing-enq-cont" onClick={()=>{
                document.getElementById('enquire-container').style.display = 'none';
            }}>&times;</span>
            <div class="enq-main-cont"> 
            <div class="enq-divs enq-prod-div">
                <img src={this.props.imgSrc} alt=""></img>
                <div class="en-pro-des-cont">
                    <p><span class="enq-popup-color-span">{this.props.color}</span> <span class="enq-popup-size-span">{this.props.size}</span> {this.props.name} {this.props.date}
                    </p>
                   <p class="enq-price-cont">&#36; <span class="pop-price-tag p-tags">{this.props.price}</span></p>
                </div>
            </div>
            <form action="#" class="enq-divs receiver-info-form">
                <input type="text" placeholder="Anastasia Fesiuk" class="enq-div-first-section-inputs" required></input>
                <input type="email" placeholder="Cheezecockezero@gmail.com" class="enq-div-first-section-inputs" required></input>
                <input type="number" placeholder="+7 (850)500-50-50" class="enq-div-first-section-inputs enq-div-number-input" required></input>
                <div class="checkbox">
                    <input type="checkbox" id="enq-checkbox" required></input>
                    <label for="enq-checkbox">I accept the <a href="#">privacy policy</a> of the cameamile</label>
                    
                </div>
            <input type="submit" value="Enquire" id="enq-pop-btn" class="enq-div-first-section-inputs"></input>
            
                </form>
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default EnquireCont;