import React, { useState } from 'react';
import './Tagcomp.scss'

const Tagcomp = ({ name, link, closable=false }) => {

    const [show, setShow] = useState(true)

    const closebtn = () => {
        setShow(false)
    }

    return (
        <div className="tag-main" style={ show ? { display: 'flex' } : { display: 'none' } } >
            {
                link ? 
                <div className="tag-div  link " > 
                    <a href={link} target="_blank"  >
                        {name}
                    </a>
                    {
                        closable ?
                        <div className="closable" onClick={ () => closebtn() }  ></div>
                        : null
                    }

                </div>
                :
                <div className="tag-div  " > 
                {name}
                {
                    closable ?
                    <div className="closable" onClick={ () => closebtn() }  ></div>
                    : null
                }
                </div>
            }
        </div>
    );
};

export default Tagcomp;