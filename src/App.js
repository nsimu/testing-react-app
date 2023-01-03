import './App.css';

import Todo from './components/todo'

function App() {
  const todos = [
    { id: 1, title: 'First task', completed: false, },
    { id: 1, title: 'Second task', completed: true, },
  ];
  
  return (
    <div className="App">
      { todos.map((todo) => {
        return <Todo todo={todo} />
      })}
    </div>
  );
}

export default App;
