import React from "react";
import pic from "../img/404error.jpg";
import "../styles/NotFound.css"

function NotFound(){
    return(<div id="nf-main-div">
        <img src={pic} alt="Even 'Not found' picture doesn't loads, ha?! :)" />
        <p>This page is not available or moved.<br></br>(click on the logo on the header to go to main page)</p>
    </div>)
}
export default NotFound;