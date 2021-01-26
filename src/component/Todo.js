import React, { Component } from "react"

class Todo extends Component {
    state = {

        items: [],
        todoItem: "",

    }
    handleTodoItem(e) {
        const todoItem = e.target.value;
        this.setState(prevState => {
            return {
                todoItem: todoItem,
                items: prevState.items,
            }
        })

    }
    handleClick() {
        const items = this.state.todoItem
        this.setState({
            items: [...this.state.items, this.state.todoItem]

        })
        console.log(items)
    }
    render() {
        return (
            <div>
                <div>TODOLIST</div>
                <div>
                    <input onChange={this.handleTodoItem.bind(this)} value={this.state.todoItem}></input>
                    <button onClick={this.handleClick.bind(this)}>AddItem</button>
                    <div>{this.state.items}</div>
                </div>
            </div>
        )
    }
}
export default Todo;