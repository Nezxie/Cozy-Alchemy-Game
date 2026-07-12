import './App.css'
import { useState } from 'react'
import { ingredientList } from './assets/ingredientList'
import Header from './Header'
import Ingredient from './Ingredient'

function App() {
  const [ingredients, setIngredients] = useState([]);
  function onPickIngredient(id){
    setIngredients([...ingredients, id]);  
  }
  function onMixIngredient(){
    console.log(ingredients);
    setIngredients([]);
  }
  function getIngredientName(id){
    const name = ingredientList.find((element) => element.id === id).name;
    return name;
  }
  const shelfContents = ingredientList.map((item)=>{
    return <Ingredient key={item.id} name={item?.name} image={item?.image} onClick={()=>{onPickIngredient(item.id)}}/> 
  });
  return (
    <div className="game-container">
      <Header/>
      <div className='shelf'>
        {shelfContents}
      </div>
      <div className='cauldron-holder'>
        <div className='cauldron'>
          {
            ingredients.length>0&&
            <ul className='ingredients-list'>
              {ingredients.map((item, id)=>{
                return <li key={id}>{getIngredientName(item)}</li>
              })
              }
            </ul>
          }
        </div>
      </div>
      <button className='mix-button' onClick={onMixIngredient}>Mix</button>
    </div>
  )
}

export default App
