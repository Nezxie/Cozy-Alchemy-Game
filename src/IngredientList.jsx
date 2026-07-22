export default function IngredientList({ingredients, ingredientList}){
    function getIngredientName(id, ingredientList){
        const name = ingredientList.find((element) => element.id === id).name;
        return name;
    }

    return(
        <div className='ingredient-list'>
            {
              ingredients.length>0&&
              <ul>
                {ingredients.map((item, id)=>{
                  return <li key={id}>{getIngredientName(item, ingredientList)}</li>
                })
                }
              </ul>
            }
            {
              ingredients.length>=5&&
              <p className='full-cauldron-info'>Your cauldron is full. It's time to mix the potion.</p>
            }
            {
              ingredients.length<=0&&
              <p>Add an ingredient from the shelf to the cauldron to start brewing.</p>
            }
          </div>
    )
}