import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

export default function DeleteRow({ setMOCK_DATA, setRowSelection, rowSelection, data }) {
    const handleDelete = () => {
        const selectedIndices = Object.keys(rowSelection);
        const updatedData = data.filter((_, index) => !selectedIndices.includes(String(index)));
        setMOCK_DATA(updatedData);
        setRowSelection({});
    }

    return (
        <button onClick={handleDelete}><RiDeleteBinLine /></button>
    )
}
