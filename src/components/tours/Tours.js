import Tour from "./tour/Tour";

function Tours(props){
    return(
    
    // <Tour/>
    <div>
        <p> {props.name} </p>
            <img src={props.image} alt={props.name} />
    </div>);
}

export default Tours;