function onClick(){
    console.log("Clicked");
    
}


export default function HandleClick(){
    return(
        <button onClick={onClick}>
            Click Me
        </button>
    )
}