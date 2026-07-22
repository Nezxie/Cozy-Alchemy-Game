export default function PotionDialog({lastPotion, ref, closeDialog}){
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