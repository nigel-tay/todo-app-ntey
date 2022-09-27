import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Todo from './Todo.js'

export default function Landing() {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        setText("")
        console.log(todos)
    }, [todos])

    function handleChange(e) {
        setText(e.target.value)
        console.log(e.target.value)
    }

    function createTodo() {
        setTodos(prevState => [...prevState, {content: text}]);
    };

    return (
    <div>
        <Container className="d-flex flex-column justify-content-center">
            <h1 className="pt-5 pb-5 d-flex justify-content-center">Landing Page</h1>
            <div className="d-flex justify-content-center mb-5" id="input-container">
                <textarea maxLength="50" className="todo-input me-2" onChange={handleChange} value={text} />
                <button className="button todo-button ms-2" onClick={createTodo}>Create</button>
            </div>
            <div className="todo-list-container">
                <Todo todos={todos} />
            </div>
        </Container>
    </div>
  );
};

