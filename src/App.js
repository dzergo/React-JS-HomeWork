// import logo from './logo.svg';
// import Hello from './Hello';
import './App.css';
// import HelloClass from './HelloClass';
import React from 'react';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import Footer from './Components/Footer'

// import HelloComponent from './HelloComponent'; старо как мир

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        todos: [],
        filter: 'all'
    }
  }

  onChange = (e) => {
      // this.props.onSubmit(this.state)

      // setState = для изменения value input

      this.setState({value: e.target.value});
      // this.setState({value: e.target.value}, () => {}); setState + function after setState

  }

  createToDo = (title) => {
    title = title.trim();
    if(title !== '') {
    this.setState({
      todos: [
        ...this.state.todos,
      {id: Date.now(), title, completed: false}
      ]
    });
    }
  }

  toggleToDo = (id) => {
    this.setState({
      todos: this.state.todos.map(item => item.id === id ? {...item, completed: !item.completed} : item),
    });
  }

  // Toggle All Functional

  //Function to count Active Notes
  countActive = () => {
    return this.state.todos.filter(e => e.completed === false).length;
  }

  //Function to toggle All Notes
  toggleAllToDo = () => {
    
    if(this.countActive() > 0) {
      this.setState({
        todos: this.state.todos.map( item => !item.completed ? {...item, completed: true} : item)
      })
    }

    else {
      this.setState({
        todos: this.state.todos.map( item => !item.completed ? item : {...item, completed: false})
      })
    }
  }
  // END

  //delete Note
  removeToDo = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id )
    })
  }

  //clear all completed Notes
  clearCompletedToDo = () => {
    this.setState({
      todos: this.state.todos.filter(item => item.completed !== true )
    })
  }

  changeFilter = (filterFlag) => {
    this.setState({
      filter: filterFlag
    })
  }

  render () {
    
    return (
      <section className='todoapp'>
         {/* <Hello name='David' />
        // <Hello>
        //   someone
        // </Hello> */}

        {/* DOuuble input */}
        {/* <HelloClass value={this.state.value}  onChange={this.onChange}/>
        <HelloClass value={this.state.value}  onChange={this.onChange} /> */}
        {/* <HelloComponent />  */}

        {/* INPUT Notes*/}
        <Header createToDo={this.createToDo}/>
        <ToDoList 
          todos={this.state.todos} 
          toggleToDo={this.toggleToDo} 
          removeToDo={this.removeToDo} 
          toggleAllToDo={this.toggleAllToDo} 
          filter={this.state.filter} 
        />
        {!!this.state.todos.length && 
          <Footer 
            todos={this.state.todos} 
            filter={this.state.filter} 
            clearCompletedToDo={this.clearCompletedToDo} 
            changeFilter={this.changeFilter}
          />}
      </section>
    );
  }
}

export default App;
