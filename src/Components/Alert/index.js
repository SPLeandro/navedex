import React from 'react';
import ReactModal from 'react-modal';

import './styles.css'

import { MdClose } from 'react-icons/md';

function Alert ({visible, setVisible, messageTitle, messageText, buttons}) {

    const handleCloseModal = () =>{
        setVisible(false);
    }

    return (
        <ReactModal 
            ariaHideApp={false}
            className="modalContent" 
            overlayClassName="modalOverlay"
            isOpen={visible}
            contentLabel="Example Modal"
        >
            <div className="modalHeader">
                <h2>{messageTitle || "Alerta"}</h2>
                <a href="#" onClick={()=> {handleCloseModal()}}><MdClose size={20}/></a>
            </div>

            <div className="modalBody">
                <p>{messageText}</p>
            </div>

            {buttons?
                <div className="modalFooter">
                    {buttons}   
                </div>
                : ""
            }

            
        </ReactModal>
    )
}

export default Alert;