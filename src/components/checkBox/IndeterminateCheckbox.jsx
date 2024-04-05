import React, { useEffect, useRef } from 'react'

export default function IndeterminateCheckbox({ indeterminate, ...rest}) {
    const ref = useRef(null);
    
    console.log(ref);
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
            className={rest.className + ' cursor-pointer'}
            style={{ width: '30px'}}
            {...rest}
        />
    )
}