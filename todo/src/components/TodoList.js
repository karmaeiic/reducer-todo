import React from 'react';
import Todo from "./Todo";

const TodoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            <TodoList />
        </div>
    );
};

export default TodoList;
