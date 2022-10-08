import React from 'react';
import { FaSave, FaWindowClose } from 'react-icons/fa';

export default function EditModal({todos, setTodos, editTodo, setEditTodo, setFilterTodos}) {
    
    function confirmEdits(editedTodo) {
        console.log(editedTodo);

        const oldTodoIndex = todos.findIndex(todo => todo.id === editTodo.id);
        todos.splice(oldTodoIndex, 1, editedTodo);
        console.log(todos.splice(oldTodoIndex, 1, editedTodo));
        setTodos([...todos]);
        closeModal();
    }

    function closeModal() {
        const editModalComponent = document.querySelector(".edit-modal-container");
        const everythingElse = document.querySelector(".everything-else");
        everythingElse.style.opacity = "1"
        everythingElse.style.zIndex = "1";
        editModalComponent.style.display = "none"
        editModalComponent.style.zIndex = "-1";
    }

    return(
        <div className="edit-modal-container">
            <div className="d-flex justify-content-end">
                <span className="save-button p-2" onClick={() => confirmEdits(editTodo)}><FaSave /></span>
                <span className="close-button p-2" onClick={closeModal}><FaWindowClose /></span>
            </div>
            <textarea maxLength="50" className="edit-todo me-2" 
                onChange={(e) => setEditTodo({...editTodo, content: e.target.value})} 
                value={editTodo.content} />
        </div>
    );
};