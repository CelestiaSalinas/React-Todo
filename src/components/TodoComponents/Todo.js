import React from 'react';

const Todo = props => {
    render() {
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        }
    return (
        
      <div className={`todo${props.todo.completed ? ' completed' : ''}`}>
        <p>{props.todo.task}</p>
      </div>
    );
  };
  
  export default Todo;

  // handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//     console.log(this.state.clicked)
    
// };

// render() {
//     const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
//     return (
//         <div className= { this.state.clicked ? " completed" : "" } style={styles} onClick={this.handleClick}>{this.props.todo.task}</div>
//     );
// }
// }