import React, { useEffect, useRef, useState } from 'react'
import styles from './indeterminateCheckbox.module.css'

export default function IndeterminateCheckbox({ indeterminate, ...rest}) {
    const ref = useRef(null);

    useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            if (ref.current) {
                ref.current.indeterminate = !rest.checked && indeterminate;
            }
        }
    }, [ref, indeterminate, rest.checked]);

    return (
        <input
            type="checkbox"
            ref={ref}
            style={{ width: '30px'}}
            {...rest}
        />
    )
}