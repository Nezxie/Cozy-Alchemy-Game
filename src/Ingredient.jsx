import {useDraggable} from '@dnd-kit/react';
import {Feedback} from '@dnd-kit/dom';

export default function Ingredient({id, name, image, onClick=()=>{}, disabled=false}){
    const {ref} = useDraggable({
    id:id,
    disabled:disabled,
    plugins: [
        Feedback.configure({ 
        feedback: "clone",
        dropAnimation: null 
        }),
    ],
  });
    return(
        <div className="shelf-board">
            <button ref={ref} className="ingredient" style={{ backgroundImage: `url(${image})` }} onClick={onClick} aria-label={name}></button>
        </div>
        )

}