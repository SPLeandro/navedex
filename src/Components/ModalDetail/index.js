import React from 'react';
import ReactModal from 'react-modal';

import {Link} from 'react-router-dom';

import { MdClose, MdDelete, MdEdit } from 'react-icons/md';

import './styles.css';

function Modal ({visible, setVisible, handleDelete, handleEdit, ...props}) {

    const {name, job_role, birthdate, admission_date, project, url} = props.naver;

    return (
        <ReactModal 
            ariaHideApp={false}
            className="naverDetailContainer" 
            overlayClassName="modalOverlay"
            shouldCloseOnOverlayClick={true}
            isOpen={visible}
            contentLabel="Example Modal"
        >
            <a href="#"
                onClick={()=> {setVisible(false)}}
                style={{
                    position: "absolute",
                    right:"20px",
                    top: "20px"
                }}
            >
                <MdClose size={20}/>
            </a>
        
            
            <img src={url} alt="naver"/>

            <div className="naverDetailContent">

                <div className="naverDetailHeader">
                    <h2>{name}</h2>
                    <span>{job_role}</span>
                </div>
                
                <div className="naverDetailInfo">
                    <h3>Idade</h3>
                    <span>{birthdate}</span>
                </div>

                <div className="naverDetailInfo">
                    <h3>Tempo de empresa</h3>
                    <span>{admission_date}</span>
                </div>

                <div className="naverDetailInfo">
                    <h3>Projetos que participou</h3>
                    <span>{project}</span>
                </div>

                <div className="naverDetailOptions">
                    <a onClick={()=>{handleDelete(props.naver)}} >
                        <MdDelete size={24} />
                    </a>
                    <Link to="/naverControllers" onClick={()=>{handleEdit(props.naver)}}  >
                        <MdEdit size={24}/>
                    </Link>
                </div>
            </div>


        </ReactModal>
    )
}

export default Modal;