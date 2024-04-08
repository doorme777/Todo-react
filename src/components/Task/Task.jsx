import "./Task.css";

function Task(p) {
    return (
        <>
            <li>
                <span 
                    // className={`${p.completed ? "completed": ""}`} 
                    onClick={p.onComplete}>
                    <i className={`fa-solid fa-circle-check fa-2xl`} style={{ color: p.completed ? "#0ae60a" : "#8b8d8b" }}></i>
                </span>
                {p.text}
                <span onClick={p.onDelete}>
                    <i className="fa-solid fa-circle-xmark fa-2xl" style={{ color: "#e70808" }}></i>
                </span>
            </li>
        </>
    );
};

export { Task };
