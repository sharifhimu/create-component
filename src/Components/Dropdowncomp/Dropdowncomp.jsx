import React, { useState } from 'react';
import './Dropdowncomp.scss'

const Dropdowncomp = ({ name, menu, type }) => {

    const [displayMenu, setDisplaymenu ] = useState(false)

    // let menu =  [
    //     {
    //         name: 'Create Page',
    //         link: '#Create page'
    //     },
    //     {
    //         name: 'Manage Page',
    //         link: '#Manage page'
    //     },
    //     {
    //         name: 'Delete Page',
    //         link: '#Delete page'
    //     },
    // ]


    return (
        <div>
            <div  className="dropdown default"  >
            <div className="button" 
            onClick={() => setDisplaymenu(!displayMenu) }
            onBlur={ () => setDisplaymenu(!displayMenu) }
            onFocus={ () => setDisplaymenu(!displayMenu) }
            tabIndex="0"
            > {name} </div>

            { displayMenu ? (
            <ul style={ type == 'default' ? { width: 'fit-content' } : type == 'tall' ? { width: '200px', height: '200px', overflowY: 'scroll' } : type == 'fit-container' ? { width: '100vw' } : { width: 'fit-content'  } } >
             {
                 menu.map((v,i) => {
                     return(
                         <li key={i} ><a className="active" href={v.link}> {v.name} </a></li>
                     )
                 })
             }   
            </ul>
            ):
            (
            null
            )
            }

        </div>
        </div>
    );
};

export default Dropdowncomp;