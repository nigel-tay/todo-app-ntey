import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';

export default function Todo({todos}) {

    return (
        <Container>
            <h2 className="d-flex justify-content-center">Todo List:</h2>
            <div class="todo-container d-flex flex-row flex-wrap justify-content-evenly">
                {todos.map((todo, id) => {
                    return (
                        <div className="todo m-5" id={id}>
                            <div className="d-flex justify-content-end">
                                <span className="edit-button p-2">Edit</span>
                                <span className="delete-button p-2">Delete</span>
                            </div>
                            <p className="d-flex justify-content-center p-2">{todo.content}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    );
};
