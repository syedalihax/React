import { useState } from "react";

function List(props) {
    return (
        <div>
            <p>{props.text}</p>
            <button onClick={() => props.onDelete(props.index)}>
                delete
            </button>
        </div>
    );
}

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const deleteTodo = (index) => {
        setTodos(
            todos.filter((todo, currentIndex) => currentIndex !== index)
        );
    };

    const addTodo = () => {
        setTodos([...todos, text]);
        setText("");
    };

    return (
        <>
            <p>{text}</p>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={addTodo}>add Todo</button>

            {todos.map((todo, index) => {
                return (
                    <List
                        text={todo}
                        index={index}
                        key={index}
                        onDelete={deleteTodo}
                    />
                );
            })}
        </>
    );
}

export default App;