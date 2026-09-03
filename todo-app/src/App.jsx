import { useState } from "react";

function List(props) {
    return (
        <div>
            <p>{props.text}</p>
            <button onClick={() => props.onEdit(props.index)}>
                edit
            </button>
            <button onClick={() => props.onDelete(props.index)}>
                delete
            </button>
        </div>
    );
}

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const deleteTodo = (index) => {
        setTodos(
            todos.filter((todo, currentIndex) => currentIndex !== index)
        );
    };
    const editTodo = (index) => {
        setText(todos[index])
        setEditIndex(index)

    };
    const updateTodo = () => {
        if (text.trim() === "") {
            return alert("input should not be empty")
        }
        setTodos(
            todos.map((todo, currentIndex) => {
                if (currentIndex === editIndex) {
                    return text;
                }

                return todo;
            })
        );

        setText("");
        setEditIndex(null);

    };

    const addTodo = () => {
        if (text.trim() === "") {
            return alert("todo cannot be empty")
        }
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
            {
                editIndex === null ? (

                    <button onClick={addTodo}>add Todo</button>
                ) : (

                    <button onClick={updateTodo}>save</button>
                )
            }


            {
                todos.map((todo, index) => {
                    return (
                        <List
                            text={todo}
                            index={index}
                            key={index}
                            onDelete={deleteTodo}
                            onEdit={editTodo}
                        />
                    );
                })
            }
        </>
    );
}

export default App;