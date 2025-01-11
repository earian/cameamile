export default function Header(props) {
    function handleClick(){
        document.getElementById('side-menu').style.display = 'block';
    }
    function handleLogoClick(){
        window.location.href = '/';
    }
    return (
        <header className="header">
        <div className="logo" id="logo" onClick={handleLogoClick}><span className="main-logo">Came A Mile<span className="under-logo">grow & bloom</span></span></div>
        <div className="humberger" onClick={handleClick}>
            <div className="bar"></div>
        </div>
        </header>
        )
}
