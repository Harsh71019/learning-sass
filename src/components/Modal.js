import React from 'react'
import { useContext } from 'react'
import ModalContext from "../context/ModalContext"
const Modal = () => {
    const { state, dispatch, closeModal } = useContext(ModalContext)
    const close = (e) => {
        if (e.target.getAttribute('class') === 'modal') {
            closeModal()
        }
    }
    return state.modalStatus ? (
        <div className="modal" onClick={close} >
            <div className="modal__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magni impedit tenetur esse vel, deleniti eos praesentium doloremque minima provident, obcaecati fuga omnis accusantium similique odit facere quae quia? Incidunt?
            </div>
        </div>
    ) : '';
}

export default Modal
