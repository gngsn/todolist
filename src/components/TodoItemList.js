import React,{Component} from 'react';
import './TodoItemList.css';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, checked, color }) => (
                <div className="todo-item" key={id} >
                    <div className="remove" onClick={(e) => {
                        e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                        onRemove(id)}
                    }> &times; </div>
                    <div className={`todo-text ${checked && 'checked'}`} style={{color: color}}>
                        <div>{text}</div>
                    </div>
                    <div onClick={() => onToggle(id)}>
                        {
                            !checked && (<div className="check-square">□</div>)
                        }
                        {
                            checked && (<div className="check-mark">✓</div>)
                        }
                    </div>
                </div>
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;