export default function Ingredient({name, image, onClick}){
    return(
        <div className="ingredient" onClick={onClick}>
            <p>{name}</p>
        </div>
    )
}