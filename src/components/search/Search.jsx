import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import styles from './search.module.css'

export default function Search({ onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.elements.filter.value);
        console.log(event.target.elements.filter.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="filter" 
                placeholder='Search'
            />
            <button className={styles.searchButton}><RiSearchLine /></button>
        </form>
    )
}
