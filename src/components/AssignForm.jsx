import React from 'react';
import styles from './assignForm.module.css';
import { IoChevronBackSharp } from "react-icons/io5";

const assignFormData = [
    {title: 'Project Name', placeholder: 'ACI',},
    {title: 'Manager ID', placeholder: 'hs.kim@aci.co.kr',},
    {title: 'Expire Date', placeholder: '31/12/2024',},
    {title: 'Create At', placeholder: '15/04/2023',},
    {title: 'Service Type', placeholder: 'On-premise/Cloud',},
    {title: 'Number of Camera', placeholder: '4',},
    {title: 'Number of ROI', placeholder: '8',},
    {title: 'Number of Viewer', placeholder: '16',},
    {title: 'Project CODE', placeholder: 'xxxx-xxxx-xxxx-xxxx',},
];

export default function AssignForm({ setModalIsOpen }) {
    const handleSave = () => {
        alert('저장완료!!!!!! fuck!!');
        setModalIsOpen(false);
    }

    return (
        <>
            <div className={styles.assignFormContainer}>
                <div className={styles.assignFormHeader}>
                    <button onClick={() => setModalIsOpen(false)}><IoChevronBackSharp size='15'/></button>
                    <img
                        className={styles.logoImage} 
                        src='https://s3-alpha-sig.figma.com/img/e145/ccc7/4025f8beea3f160f9b4d70bd37d0fc20?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPbrzbWCchjnIhdTNJj7zBAqbmJ6o0plkuhdfpoZN0uPd7hmH1W4rnhQT2~GRu9TGut-JtpmYnvVkxWWC5UCNiASLQuzYxhtouRdvY5zvMaOdtDp5j~r~lOOpbZ5mGxjVGcmQdey~qdzJ9iTinBR-KpkUIbLOp37dIVpJhOSyitLik6ze3N7odS385yt5WSxd5qWp0sMXGXL3hnNbsy2tZcsTZs9GXcI7bhT-LMHmJoZNNHJYYX3kVSXpMIr2y6wJ14TqDSNwxFSsZ0vBBZAQal222tdodXpkUDHwSbA9RJntR2bF9RaJdvXaiwjXMXVPnVLRUOSm8Rgi61MDTl0gQ__'></img>
                </div>

                <div className={styles.inputContainer}>
                    {assignFormData.map(item => (
                        <div className={styles.inputContents} key={item.title}>
                            <span className={styles.title}>{item.title}</span>
                            <div><input className={styles.inputCustomStyle} placeholder={item.placeholder}></input></div>
                        </div>
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </>
    )
}