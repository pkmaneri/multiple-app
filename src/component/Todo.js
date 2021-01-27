import React, { Component } from "react"

class Todo extends Component {
    state = {

        items: [],
        todoItem: "",
        remove: ""

    }
    handleTodoItem(e) {
        const todoItem = e.target.value;
        this.setState(prevState => {
            return {
                todoItem: todoItem,
                items: prevState.items,
                remove: prevState.r
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
   
    handleRemove(i) {
        let items = [...this.state.items];
        items.splice(i, 1)
        this.setState({
            items: items

        })
    };


    render() {
        return (
            <div>
                <div>TODOLIST</div>
                <div>
                    <input onChange={this.handleTodoItem.bind(this)} value={this.state.todoItem}></input>
                    <button onClick={this.handleClick.bind(this)}>AddItem</button>

                    <ul>
                        {this.state.items.map((todoItem, i) => {
                            return (

                                <li key={i}>{todoItem}
                                    <button onClick={this.handleRemove.bind(this, i)}>x</button>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Todo;