function Header() {
    return <h1>Todo App</h1>
}

function TodoForm() {
    return <h2>Add Todo</h2>
}

function TodoList() {
    return (
        <>
            <Item title="learn react"/>
            <Item title="learn mongodb"/>
            <Item title="learn express js"/>
            <Item title="learn node js"/>
        </>
    )
}
function Item(props) {
    return (
        <p>{props.title}</p>
    )
}

function App() {
    return (
        <>
            <Header />
            <TodoForm />
            <TodoList />
        </>
    )
}

export default App;