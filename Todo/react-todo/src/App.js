import logo from './logo.svg';
import './App.css';
import Todo from "./Todo";
import UsememoHook from './UseMemoHook';
import UseRefHook from './UseRefHook';

function App() {
  return (
    <div className="App">
      <Todo />
      <UsememoHook />
      <UseRefHook />
     </div>
  );
}

export default App;
