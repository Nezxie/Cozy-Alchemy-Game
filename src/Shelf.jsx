import Ingredient from './Ingredient.jsx'

export default function Shelf({cauldronFull, ingredientList}){
    return(
        <div className={`shelf ${cauldronFull?'full-cauldron-state':''}`}>
          {ingredientList.map((item)=>{
            return <Ingredient id={item.id} key={item.id} name={item?.name} image={item?.image}  disabled={cauldronFull}/> 
            })
     }
        </div>
    )
}