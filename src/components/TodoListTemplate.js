import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({palette, form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrappers">
                {palette}
            </section>
            <section className="form-wrappers">
                {form}
            </section>
            <section className="todos-wrappers">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;