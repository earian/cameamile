import React from "react";
import '../styles/sideMenu.css'


function handleClosing(e){
    const t = document.getElementById('side-menu');
    if(t == e.target){
        t.style.display = 'none';
    }
}

class SideMenu extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
        <div className="pop-cont" id='side-menu' onClick={handleClosing}>
        <div className="pop-menu-cont">
        <header className="header header-pop">
            <div className="logo logo-pop"><span className="main-logo main-logo-pop">Came A Mile</span><span className="under-logo under-logo-pop">grow & bloom</span></div>
        </header>
            
        <div className="pop-items">
            <h2>Spring '21 Collections</h2>
            <ul>
                <li><a href="/products">t-shirt</a></li>
                <li><a href="/products">coats</a></li>
                <li><a href="/products">caps</a></li>
                <li><a href="/products">sweatshirts</a></li>
                <li><a href="/about-us">About Us</a></li>
            </ul>
        </div>
    </div>
    </div>
        )
    }
}

export default SideMenu;