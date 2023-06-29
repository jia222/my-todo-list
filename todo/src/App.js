import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'react 주특기 1차 시험',
    },
  ]);
  return (
    <div className="container">
      <div className="box">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodos([...todos, { id: todos.length + 1, title: title }]);
          }}
        >
          추가하기
        </button>

        <h1>Todo List</h1>
      </div>
      <div className="todosBox">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
