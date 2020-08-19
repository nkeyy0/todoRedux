import React from 'react';

const ButtonDelete = ({onClick}) => {
    return(
        <button onClick = {onClick}
                style = {{marginLeft : '5px'}}>
                Delete Completed Todo</button>
    )
}

export default ButtonDelete;