import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
    render() {
        
        return (
            <section className="main">
            {
                this.props.todos.length ? 
                    <input 
                        id="toggle-all" 
                        className="toggle-all" 
                        type="checkbox" 
                        checked={this.props.todos.every(i=>i.completed)} 
                        onChange={this.props.toggleAllToDo} 
                    /> : null
            }
            <label htmlFor="toggle-all" ></label>
            <ul className="todo-list" >
                {
                    this.props.todos.filter(e =>{
                        if(this.props.filter === 'all') {
                            return e
                        }
                        else if (this.props.filter === 'active') {
                            return e.completed === false
                        }
                        else {
                            return e.completed === true
                        }
                    }).map(
                        item =>
                            <ToDoItem 
                                key={item.id} 
                                item={item} 
                                toggleToDo={this.props.toggleToDo} 
                                removeToDo={this.props.removeToDo}
                            />                        
                        )
                }
            </ul>
        </section>
        )
    }
}

export default ToDoList;