import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList.js'
import EditModal from './EditModal.js';

export default function Landing() {
    const [todos, setTodos] = useState([]);
    const [filterTodos, setFilterTodos] = useState([...todos]);
    const [text, setText] = useState("");
    const [editTodo, setEditTodo] = useState({})
    
    useEffect(() => {
        setText("");
        setFilterTodos([...todos]);
    }, [todos]);

    function handleText(e) {
        setText(e.target.value);
    };

    function createTodo() {
        setTodos(prevState => [...prevState, {content: text, id: uuidv4()}]);
    };

    return (
    <div>
        <EditModal className="edit-modal-component" 
            todos={todos} 
            setTodos={setTodos} 
            editTodo={editTodo}
            setEditTodo={setEditTodo} />
        <Container className="everything-else d-flex flex-column justify-content-center">
            <h1 className="pt-5 pb-5 d-flex justify-content-center">Landing Page</h1>
            <div className="d-flex justify-content-center mb-5" id="input-container">
                <textarea maxLength="50" className="todo-input me-2" onChange={handleText} value={text} />
                <button className="button todo-button ms-2" onClick={createTodo}>Create</button>
            </div>
            <div className="todo-list-container">
                <TodoList todos={todos} 
                setTodos={setTodos} 
                filterTodos={filterTodos} 
                setFilterTodos={setFilterTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo} />
            </div>
        </Container>
    </div>
  );
};

