import React from 'react';

function Wrapper({child}){
    const style = {
        border: '2px solid black',
        padding: '16px'
    };

    return(
        <div style={style}>
            {child}
        </div>
    )
}

export default Wrapper;