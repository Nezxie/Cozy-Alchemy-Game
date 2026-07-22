import './App.css'

import { useState, useRef } from 'react'
import {DragDropProvider} from '@dnd-kit/react';
import {Cursor} from '@dnd-kit/dom';

import Cauldron from './Cauldron.jsx'
import PotionDialog from './PotionDialog.jsx'
import IngredientList from './IngredientList.jsx'
import Shelf from './Shelf.jsx'

import { ingredientList } from './lib/ingredientList.js'
import {calculatePotion} from './lib/potions.js'
import grabbingCursor from './assets/cursor/cursor-grabbing.png'


function App() {
  const [ingredients, setIngredients] = useState([]);
  const [lastPotion, setLastPotion] = useState({});
  const [activeDragId, setActiveDragId] = useState(null);
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
    if(ingredients.length<maxIngredients){
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
  function onDragStart(operation){
    setActiveDragId(operation.source.id);
  }

  function onDragEnd(event,id=1){
    setActiveDragId(null);
    if (event.canceled) return;
    const {source,target} = event.operation;
      if(target?.id === 'cauldron'){
      onPickIngredient(source?.id);
    }
  }

  return (
    <>
      <div className="game-container">
      <DragDropProvider
        plugins={(defaults) => [
          ...defaults,
          Cursor.configure({ cursor: `url("${grabbingCursor}"),grabbing` }),
        ]}
        onDragStart={({operation})=>{onDragStart(operation)}}
        onDragEnd={(event) => {onDragEnd(event)}}  
      >
        <Shelf cauldronFull={ingredients.length>=maxIngredients} ingredientList={ingredientList} onPickIngredient={onPickIngredient}/>
        <div className='cauldron-holder'>
          <IngredientList ingredients={ingredients} ingredientList={ingredientList}/>
            <Cauldron ingredients={ingredients}/>
        </div>
        </DragDropProvider>
        <div className='buttons'>
        <button className={`mix-button ${ingredients.length>=5&&'full-cauldron-state'}`} onClick={onMixIngredient}>Mix</button>
        <button className='flush-button' onClick={onFlushCauldron}>Flush</button>
        </div>
      </div>
      <PotionDialog lastPotion={lastPotion} ref={dialogRef} closeDialog={closeDialog}/>
    </>
  )
}

export default App
