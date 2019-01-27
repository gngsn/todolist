import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
    id = 2;
    state = {
        input : '',
        color : '#343a40',
        todos : [
            { id : 0, text: "Let's start React!", checked : false },
            { id : 1, text: "redux는 언제하지...", checked : true },
        ]
    };

    handleChange = (e) => {
        this.setState({
            input : e.target.value
        });
    };

    handleKeyPress = (e) =>{
        if( e.key === 'Enter'){
            this.handleCreate();
        }
    };

    handleCreate = () => {
        const { input, color, todos } = this.state;
        this.setState({
            input : '',
            todos : todos.concat({
                id : this.id++,
                text : input,
                checked: false,
                color
            })
        })
    };

    handleToggle = (id) => {
        const { todos } = this.state;

        const index = todos.findIndex( todo => todo.id === id )
        const selected = todos[index];

        this.setState({
            todos: [
                ...todos.slice(0, index),
                {
                    ...selected,
                    checked: !selected.checked
                },
                ...todos.slice(index + 1, todos.length)
            ]
        });

    };

    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos : todos.filter(todo => todo.id !== id )
        })
    };

    handleColor = (color) => {
        this.setState({
            color : color
        })
    };

    render() {
        const { input, color, todos } = this.state;
        const {
            handleChange,
            handleKeyPress,
            handleCreate,
            handleToggle,
            handleRemove,
            handleColor
        } = this;

        return (
            <TodoListTemplate form={(
                <Form
                    value={input}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onCreate={handleCreate}
                    color = {color}
                />)}
            palette={
                <Palette colors={colors} selected={color} onSelect={handleColor}/>
            }>
                <TodoItemList todos={ todos } onToggle={handleToggle} onRemove={handleRemove} />
            </TodoListTemplate>
        );
    }
}

export default App;