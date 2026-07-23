import {useDroppable} from '@dnd-kit/react';
import cauldron_img from './assets/cauldron/cauldron.png';

export default function Cauldron({ingredients,isBrewing}){
    const {ref} = useDroppable({
    id:'cauldron',
  });
  
    return(
        <div ref={ref} className={`cauldron ${ingredients.length>0?'bubbling':""} ${isBrewing?'brewing':""}`}>
            <img src={cauldron_img} alt="cauldron"/>
        </div>
    )
}