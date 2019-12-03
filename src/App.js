import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: []
    }
  }

  

  addTodo = newTodotext => {
    const newTodo = {
      task:newTodotext,
      id: Date.now(),
      clicked: false
    }
    

    this.setState({
      todoList: [...this.state.todoList, newTodo],
      clicked: false
    })
  }

    handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    console.log(this.state.clicked)
    
};

  clearClicked = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.clicked
      
        
      )
    })
  }

  render() {
    
    return (
      <div>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todoList={this.state.todoList} />
        <h2>Welcome to your Todo App!</h2>
        
      </div>
    );
  }
}

export default App;
