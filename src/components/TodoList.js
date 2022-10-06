import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';


export default function TodoList({todos, setTodos, filterTodos, setFilterTodos}) {

    // Need a copy of todos so that i can modify when filtering
    // Text change should constantly filter and sift out todos

    function handleFilter(e) {
        let filterText = "";
        filterText += e.target.value;
        let newTodos = todos.filter(todo => todo.content.toLowerCase().includes(filterText.toLowerCase()));
        setFilterTodos(newTodos);
    };

    function deleteTodo(id) {
        let newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <Container>
            <h2 className="d-flex justify-content-center">Todo List:</h2>
            <div className="d-flex justify-content-center">
                <input className="text-center" type="text" placeholder="Search your Todos" onChange={handleFilter} />
            </div>
            <div className="todos-container d-flex justify-content-center">
                <div className="todo-container d-flex flex-row flex-wrap justify-content-start">
                    {filterTodos.map(({content, id}) => {
                        return (
                            <div className="todo m-5" key={id}>
                                <div className="d-flex justify-content-end">
                                    <span className="edit-button p-2"><FaPencilAlt /></span>
                                    <span className="delete-button p-2" onClick={() => deleteTodo(id)}><FaTrash/></span>
                                </div>
                                <p className="todo-content d-flex justify-content-start">{content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    );
};
