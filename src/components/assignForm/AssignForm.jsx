import React, { useState } from 'react';
import styles from './assignForm.module.css';
import { IoChevronBackSharp } from "react-icons/io5";

export default function AssignForm({ setModalIsOpen, MOCK_DATA, setMOCK_DATA }) {
    const [form, setForm] = useState(
        {
            projectName: '',
            managerId: '',
            expireDate: '',
            createdAt: '',
            serviceType: '',
            numberOfCamera: '',
            numberOfROI: '',
            numberOfViewer: '',
            projectCode: '',
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = [...MOCK_DATA];
        updatedData.push(form);
        setMOCK_DATA(updatedData)
        setModalIsOpen(false)
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

                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <label htmlFor="projectName">Project Name</label>
                    <input 
                        type="text"
                        id='projectName'
                        name='projectName'
                        value={form.projectName}
                        onChange={handleChange}
                        placeholder='ACI'
                    />
                    <label htmlFor="managerId">Manager ID</label>
                    <input 
                        type="email"
                        id='managerId'
                        name='managerId'
                        value={form.managerId}
                        onChange={handleChange}
                        placeholder='hs.kim@aci.co.kr'
                    />
                    <label htmlFor="expireDate">Expire Date</label>
                    <input 
                        type="date"
                        id='expireDate'
                        name='expireDate'
                        value={form.expireDate}
                        onChange={handleChange}
                        placeholder='2024-03-31'
                    />
                    <label htmlFor="createdAt">Created At</label>
                    <input 
                        type="date"
                        id='createdAt'
                        name='createdAt'
                        value={form.createdAt}
                        onChange={handleChange}
                        placeholder='2024-01-15'
                    />
                    <label htmlFor="serviceType">Service Type</label>
                    <input 
                        type="text"
                        id='serviceType'
                        name='serviceType'
                        value={form.serviceType}
                        onChange={handleChange}
                        placeholder='Type A'
                    />
                    <label htmlFor="numberOfCamera">Number Of Camera</label>
                    <input 
                        type="number"
                        id='numberOfCamera'
                        name='numberOfCamera'
                        value={form.numberOfCamera}
                        onChange={handleChange}
                        placeholder='5'
                    />
                    <label htmlFor="numberOfROI">Number Of ROI</label>
                    <input 
                        type="number"
                        id='numberOfROI'
                        name='numberOfROI'
                        value={form.numberOfROI}
                        onChange={handleChange}
                        placeholder='3'
                    />
                    <label htmlFor="numberOfViewer">Number Of Viewer</label>
                    <input 
                        type="number"
                        id='numberOfViewer'
                        name='numberOfViewer'
                        value={form.numberOfViewer}
                        onChange={handleChange}
                        placeholder='10'
                    />
                    <label htmlFor="projectCode">Project Code</label>
                    <input 
                        type="text"
                        id='projectCode'
                        name='projectCode'
                        value={form.projectCode}
                        onChange={handleChange}
                        placeholder='ABC123'
                    />
                    <button type='submit'>Save</button>
                </form>
            </div>
        </>
    )
}