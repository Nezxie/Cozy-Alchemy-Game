export default function Ingredient({name, image, onClick}){
    return(
        <div className="shelf-board">
            <button className="ingredient" style={{ backgroundImage: `url(${image})` }} onClick={onClick} aria-label={name}></button>
        </div>
        )

}