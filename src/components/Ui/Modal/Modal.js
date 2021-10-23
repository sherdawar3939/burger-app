import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import BackDrop from "../BackDrop/Backdrop";
import './Modal.css';

const modal = (props) => (
    <Auxiliary>
     <BackDrop show={props.show} clicked={props.closeModal}/>
     <div className="Modal" style={{transform:props.show ? 'translateY(0)': 'translateY(-100vh)',
         opacity:props.show ? '1' : '0'
        }}>
        {props.children}
     </div>
    </Auxiliary>
)

export default modal