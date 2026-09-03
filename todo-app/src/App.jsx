import { useState, useEffect } from "react";

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
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");

        if (savedTodos) {
            return JSON.parse(savedTodos);
        }

        return [];
    });

    const [text, setText] = useState("");
    const [editIndex, setEditIndex] = useState(null);



    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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

    const addTodo = (e) => {
        e.preventDefault()
        if (text.trim() === "") {
            return alert("todo cannot be empty")
        }
        setTodos([...todos, text]);
        setText("");
    };

    return (
        <>

            <form onSubmit={addTodo}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <button type="submit">
                    add Todo
                </button>
            </form>

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