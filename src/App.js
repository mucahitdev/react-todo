import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Section from './components/Section'
import Footer from './components/Footer';
import Info from './components/Info';

function App() {


  const [todos, setTodos] = useState([
    { id: 1, task: "Learn Javascript", done: false },
    { id: 2, task: "Learn React", done: true },
    { id: 3, task: "Have a life!", done: false },
  ]);

  const [filter, setFilter] = useState();

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }
  const removeComplated = () => {

    setTodos(todos.filter((todo)=> todo.done === false) )
  }


  return (


    <div>
      <section className="todoapp">
        <Header addTodo={addTodo} />

        <Section todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} filter={filter}/>

        <Footer todos={todos} setFilter={setFilter} removeComplated={removeComplated} />

      </section>    

      <Info/>

    </div>
  )


}

export default App;
