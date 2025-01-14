import '../styles/enquiryPopup.css'

export default function EnquireCont({ imgSrc , product }) {
    function closingEnq(){
        document.querySelector('body').style.overflow = 'auto';
        document.getElementById('enquire-container').style.display = 'none';
    }

        return (
            <>
            <div className="pop-cont enquiry-main-cont" id='enquire-container'>
                <div className="enquiry-cont">
                <h3>Online Enquiry</h3>
            <span className="closing-enq-cont" onClick={closingEnq}>&times;</span>
            <div className="enq-main-cont"> 
            <div className="enq-divs enq-prod-div">
                <img src={imgSrc} alt=""></img>
                <div className="en-pro-des-cont">
                    <p><span className="enq-popup-color-span">{product.color}</span> <span className="enq-popup-size-span">{product.size}</span> {product.name}<br></br>{product.dropDate}
                    </p>
                   <p className="enq-price-cont">&#36; <span className="pop-price-tag p-tags">{product.price}</span></p>
                </div>
            </div>
            <form action="#" className="enq-divs receiver-info-form">
                <input type="text" placeholder="Anastasia Fesiuk" className="enq-div-first-section-inputs" required></input>
                <input type="email" placeholder="Cheezecockezero@gmail.com" className="enq-div-first-section-inputs" required></input>
                <input type="number" placeholder="+7 (850)500-50-50" className="enq-div-first-section-inputs enq-div-number-input" required></input>
                <div className="checkbox">
                    <input type="checkbox" id="enq-checkbox" required></input>
                    <label htmlFor="enq-checkbox">I accept the <a href="#">privacy policy</a> of the cameamile</label>
                    
                </div>
            <input type="submit" value="Enquire" id="enq-pop-btn" className="enq-div-first-section-inputs"></input>
            
                </form>
                </div>
                </div>
            </div>
            </>
        )
}