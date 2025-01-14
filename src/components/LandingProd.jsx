export default function LandingProduct(props){
        return(
            <div>
                <img src={props.imgSrc} alt=""></img>
                <p>{props.title}</p>
            </div>
        )
    }