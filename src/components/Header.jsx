import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    handleClick(){
        document.getElementById('side-menu').style.display = 'block';
    }
    handleLogo(){
        window.location.href = '/';
    }
    render(){
        return (
        <header class="header">
        <div class="logo" id="logo" onClick={this.handleLogo}><span class="main-logo">Came A Mile</span><span class="under-logo">grow & bloom</span></div>
        <div class="humberger" onClick={this.handleClick}>
            <div class="bar"></div>
        </div>
        </header>
        )
    }
}
export default Header;