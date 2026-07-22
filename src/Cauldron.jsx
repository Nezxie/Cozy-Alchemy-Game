import {useDroppable} from '@dnd-kit/react';
import cauldron_img from './assets/cauldron/cauldron.png';

export default function Cauldron({ingredients}){
    const {ref} = useDroppable({
    id:'cauldron',
  });
  
    return(
        <div ref={ref} className={`cauldron ${ingredients.length>0?'bubbling':""}`}>
            <img src={cauldron_img} alt="cauldron"/>
        </div>
    )
}