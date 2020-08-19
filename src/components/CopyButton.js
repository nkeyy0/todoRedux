import React from 'react';


const CopyButton = ({onCopy, id, text}) => {
    return(
        <button onClick = {() => onCopy(id, text)}
                style = {{marginLeft : '5px'}}>
                Copy todo</button>
    )
}

export default CopyButton;