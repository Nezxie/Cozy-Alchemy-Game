import { useEffect } from "react";
import modalBg from "./assets/banerModal.png";
import modalBgSmall from "./assets/modalBaner-small.png";


export default function PotionDialog({lastPotion, ref, closeDialog}){
  useEffect(() => {
      const img = new Image();
      img.src = modalBg;
      const imgSmall = new Image();
      imgSmall.src = modalBgSmall;
    }, []);
    
    return(
    <dialog id="potion-dialog" ref={ref}>
        <div className='dialog-contents'>
          <h2>{lastPotion?.name}</h2>
          <p>{lastPotion?.description}</p>
          <button className="modal-close-btn" id="close" onClick={closeDialog}>
            Cool!
          </button>
        </div>
      </dialog>
    )
}