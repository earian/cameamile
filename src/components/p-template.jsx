import '../styles/p-template.css';

export default function ProductTemplate(props){
    function handleClick(){
        window.location.href = "/products/sweatshirts";
    }
        return (
            <div className="p-template-container" >
                <div onClick={handleClick}>
                    <img src={props.imgSrc} />
                </div>
                <p>{props.name}</p>
            </div>
        )
    }