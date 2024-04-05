import './HeaderTodo.css';

function HeaderTodo({total, completed}) {
    return (
        <>
        <div role='header' className='background background-top'>
            <h1>Tareas terminadas <span>{completed}</span> de <span>{total}</span></h1>

            <input type="search" name="" id="" placeholder="Cubrir a Juan..."/>
        </div>
        </>
    );
}

export { HeaderTodo }