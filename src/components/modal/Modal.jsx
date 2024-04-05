import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import styles from './modal.module.css';
import AssignForm from '../assignForm/AssignForm';
import { FiFolderPlus, FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Modal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        // Set the app element
        ReactModal.setAppElement('#root');

        return () => {
            // Cleanup function
            ReactModal.setAppElement(null);
        };
    }, []);

    return (
        <>
            <button onClick={() => setModalIsOpen(true)}><FiFolderPlus /></button>
            <button ><FiEdit /></button>
            <button ><RiDeleteBinLine /></button>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                ariaHideApp={true}
                className={styles.customModal}
                overlayClassName={styles.customOverlay}
            >
                <AssignForm 
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                />
            </ReactModal>
        </>
        
    )
}
