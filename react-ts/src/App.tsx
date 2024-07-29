import React from 'react';
import Todos from './components/Todos';
import Todo from "./models/todo";

function App() {

  const todos = [
    new Todo("learn react"),
    new Todo("learn javascript")

  ]
  return (
    <div className="App">
      <Todos items={todos}/>
    </div>
  );
}

export default App;
