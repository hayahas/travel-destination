function Tours(props){
    return(<div>
        <p> {props.name} </p>
            <img src={props.image} alt={props.name} />
    </div>);
}

export default Tours;