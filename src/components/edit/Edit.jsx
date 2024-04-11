import React from 'react'
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { FiEdit } from "react-icons/fi";
import styles from './edit.module.css';
import InputForm from '../inputForm/InputForm';

export default function Edit({ MOCK_DATA, setMOCK_DATA, table }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [form, setForm] = useState({})
    const [selectedIndex, setSelectedIndex] = useState();

    useEffect(() => {
        ReactModal.setAppElement('#root');

        return () => {
            ReactModal.setAppElement(null);
        };
    }, []);

    const handleEdit = () => {
        const selectedIndices = Object.keys(table.getState().rowSelection);

        if(selectedIndices.length !== 1) {
            alert('한 가지만 선택해주세요.')
        }
        if(selectedIndices.length === 1) {
            setSelectedIndex(selectedIndices.join(''))
            setForm(MOCK_DATA[selectedIndex])
            setModalIsOpen(true);
        }
    }

    return (
        <>
            <button onClick={handleEdit}><FiEdit /></button>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                ariaHideApp={true}
                className={styles.customModal}
                overlayClassName={styles.customOverlay}
            >
                <InputForm  
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    MOCK_DATA={MOCK_DATA}
                    setMOCK_DATA={setMOCK_DATA}
                    form={form}
                    setForm={setForm}
                    selectedIndex={selectedIndex}
                />
            </ReactModal>
        </>
    )
}
