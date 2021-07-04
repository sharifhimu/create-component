import React from 'react';
import './Buttoncomp.scss';

const Buttoncomp = ({text, type}) => {
    console.log(text, type);
    return (
        <div className='btn-main'>
            <button  className={`btn-div ${type} `}   >
                {text}
                
            </button>
        </div>
    );
};

export default Buttoncomp;