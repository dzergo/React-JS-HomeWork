import React from "react";

class ToDoItem extends React.Component {
    render () {
        return (
                <li className={this.props.item.completed ? 'completed' : ""} >
                    <div className="view" >
                        <input 
                            className="toggle" 
                            type="checkbox" 
                            checked={this.props.item.completed}
                            onChange={() => this.props.toggleToDo(this.props.item.id)}
                        />
                        <label>{this.props.item.title}</label>
                        <button 
                            className="destroy"
                            onClick={() => this.props.removeToDo(this.props.item.id)}>
                        </button>
                    </div>
                    <input className="edit" value="asd" readOnly/>
                </li>
        );
    }
}

export default ToDoItem;