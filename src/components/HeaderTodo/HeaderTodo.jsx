import React from 'react';
import './HeaderTodo.css';

function HeaderTodo({total, completed, searchValue, setSearchValue}) {
    return (
        <>
        <div role='header' className='background background-top'>
            <h1>Tareas terminadas <span>{completed}</span> de <span>{total}</span></h1>

            <input 
            type="search" 
            name="" 
            id="" 
            placeholder="Cubrir a Juan..." 
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value);
            }
            }/>
        </div>
        </>
    );
}

export { HeaderTodo }