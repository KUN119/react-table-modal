import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import styles from './modal.module.css';
import AssignForm from '../assignForm/AssignForm';
import { FiFolderPlus } from "react-icons/fi";

export default function Modal({ MOCK_DATA, setMOCK_DATA }) {
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
                    MOCK_DATA={MOCK_DATA}
                    setMOCK_DATA={setMOCK_DATA}
                />
            </ReactModal>
        </>
    )
}
