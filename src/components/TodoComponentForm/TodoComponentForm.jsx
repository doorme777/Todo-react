import "./TodoComponentForm.css";

function TodoComponentForm({ children }) {
  return (
    <>
      <ul className="background background-bottom">{children}</ul>
    </>
  );
}

export { TodoComponentForm };
