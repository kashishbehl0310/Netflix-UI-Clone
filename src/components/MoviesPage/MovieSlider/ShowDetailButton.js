import React from 'react';
import IconArrowDown from './Icons/IconArrowDown';

const ShowDetailButton = ({onClick}) => (
    <button onClick={onClick} className="show_details_button" >
        <span>
            <IconArrowDown />
        </span>
    </button>   
)

export default ShowDetailButton;