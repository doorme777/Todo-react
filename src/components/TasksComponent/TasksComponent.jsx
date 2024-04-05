import "./TasksComponent.css";

function TaskComponent({children}) {
    return(
        <>
        <ul className="background background-bottom">
            {children}
        </ul>
        </>
    )
}

export { TaskComponent }