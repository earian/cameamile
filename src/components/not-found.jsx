import pic from "../img/404error.jpg";
import "../styles/NotFound.css"

export default function NotFound(){
    return(<div id="nf-main-div">
        <img src={pic} alt="Even 'Not found' picture doesn't loads, ha?! :)" draggable='false'/>
        <p>This page is not available or moved.<br></br>
        (click on the logo on the header to go to main page)</p>
    </div>)
}