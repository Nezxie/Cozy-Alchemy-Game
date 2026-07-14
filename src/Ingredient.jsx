export default function Ingredient({name, image, onClick}){
    return(
        <button className="ingredient" style={{ backgroundImage: `url(${image})` }} onClick={onClick}>
            {/* <p>{name}</p> */}
        </button>
    )
}