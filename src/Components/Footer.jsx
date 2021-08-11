import React from "react";

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer" >
                <span className="todo-count" >
                    <strong >{this.props.todos.filter(item => item.completed === false).length}</strong>
                    <span> </span>
                    <span>items</span>
                    <span> left</span>
                </span>
                <ul className="filters">
                    <li >
                        <a href="#/" className={this.props.filter === 0 ? 'selected' : null } onClick={() =>this.props.changeFilter('all')} >All</a>
                    </li>
                    <span></span>
                    <li>
                        <a href="#/active" className={this.props.filter === 1 ? 'selected' : null } onClick={() =>this.props.changeFilter('active')}>Active</a>
                    </li>
                    <span> </span>
                    <li >
                        <a href="#/completed" className={this.props.filter === 2 ? 'selected' : null } onClick={() =>this.props.changeFilter('completed')}>Completed</a>
                    </li>
                </ul>
                { this.props.todos.some(i=>i.completed) ? <button className="clear-completed" onClick={() => this.props.clearCompletedToDo()}>Clear completed</button> : null}
            </footer>
        )
    }
}

export default Footer;