import React, {useState} from 'react';

function PMButton() {
    const [value, setValue] = useState(0);
    const plusOne = () => {
        setValue(prevNumber => prevNumber + 1);
    }

    const minusOne = () => {
        setValue(prevNumber => prevNumber - 1);
    }
    return (
        <>
            <h1>{value}</h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
        </>
    )
}

export default PMButton;