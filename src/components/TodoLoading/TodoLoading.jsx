import "./TodoLoading.css";

function TodoLoading() {
    return (
        <>
            <div className="card">
                <div className="card__skeleton card__description"></div>
            </div>
            <div className="card">
                <div className="card__skeleton card__description"></div>
            </div>
            <div className="card">
                <div className="card__skeleton card__description"></div>
            </div>
            <div className="card">
                <div className="card__skeleton card__description"></div>
            </div>
            <div className="card">
                <div className="card__skeleton card__description"></div>
            </div>
        </>
    )
}

export {TodoLoading};