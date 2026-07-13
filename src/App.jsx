import './App.css'
import { useState, useRef } from 'react'
import { ingredientList } from './lib/ingredientList.js'
import Header from './Header'
import Ingredient from './Ingredient'
import {calculatePotion} from './lib/potions.js'

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [lastPotion, setLastPotion] = useState({});
  const dialogRef = useRef(null);
  const maxIngredients = 5;

  function openDialog(){
    if(dialogRef.current){
      dialogRef.current.showModal();
    }
  };

  function closeDialog(){
    if(dialogRef.current){
      dialogRef.current.close();
      emptyCauldron();
    } 
  };

  function onPickIngredient(id){
    if(ingredients.length<5){
      setIngredients([...ingredients, id]);  
    }
  }

  function emptyCauldron(){
    setIngredients([]);
    setLastPotion({});
  }

  function onMixIngredient(){
    setLastPotion(calculatePotion(ingredients));
    openDialog();
  }

  function onFlushCauldron(){
    emptyCauldron();
  }

  function getIngredientName(id){
    const name = ingredientList.find((element) => element.id === id).name;
    return name;
  }
  const shelfContents = ingredientList.map((item)=>{
    return <Ingredient key={item.id} name={item?.name} image={item?.image} onClick={()=>{onPickIngredient(item.id)}}/> 
  });
  return (
    <>
      <div className="game-container">
        <Header/>
        <div className={`shelf ${ingredients.length>=5&&'full-cauldron-state'}`}>
          {shelfContents}
        </div>
        <div className='cauldron-holder'>
          <div className='ingredient-list'>
            {
              ingredients.length>0&&
              <ul className='ingredients-list'>
                {ingredients.map((item, id)=>{
                  return <li key={id}>{getIngredientName(item)}</li>
                })
                }
              </ul>
            }
            {
              ingredients.length>=5&&
              <p className='full-cauldron-info'>Your cauldron is full. It's time to mix the potion.</p>
            }
          </div>
          <div className='cauldron'>
          </div>
        </div>
        <div className='buttons'>
        <button className={`mix-button ${ingredients.length>=5&&'full-cauldron-state'}`} onClick={onMixIngredient}>Mix</button>
        <button className='flush-button' onClick={onFlushCauldron}>Flush</button>
        </div>
      </div>
      <dialog id="potion-dialog" ref={dialogRef}>
        <p>{lastPotion?.name}</p>
        <p>{lastPotion?.description}</p>
        <button id="close" onClick={closeDialog}>
          Close
        </button>
      </dialog>
    </>
  )
}

export default App
