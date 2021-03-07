import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from 'firebase';
import Todo from './Todo/Todo';

function App() {
  // To save all list of ToDos
  // ** Imp in UseState, the type useState("") will not work 
  // because listOfTodos is an array. We should place empty array
  const [listOfTodos, setlistOfTodos] = useState([]);

  const [todoInput, setTodoInput] = useState("");
  // Use effect used to get the values only once at
  // start of the application
  useEffect(() => {
    getTodos();
  }, []) // blank value in array indicate to run only once

  const addTodo = (e) => {
    // Avoid reloading of page
    e.preventDefault();
    // Using cloud firestore
    db.collection("todos").add({
      inProgress: true,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      toDo: todoInput
    });
    // After adding the data, delete the value from input field
    setTodoInput("");
  };

  // Get the list of TODOs when we start the application
  const getTodos = () => {
    // onSnapshot reflects the new todo, if we add any new todo
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setlistOfTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todovalue: doc.data().toDo,
          inprogress: doc.data().inProgress,
        }))
      );
    });
  };

  return (
    <div className="App">
      <h1 className="smiley">Ram TODO's App</h1>
      <form>
        <TextField 
          id="standard-size-small" 
          label="Write a ToDo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          style={{width: '25rem', marginBottom: '2rem'}}/>
          <Button type="submit" 
            variant="contained" 
            size="small"
            onClick={addTodo}
            style={{display: 'none'}}>
            SAVE
          </Button>
        </form>
        {/* getting list from the listOfTodos */}
        {/* using parenthesis as map using {} needs to have a return value */}
        {/* {listOfTodos.length? (
            <h3>Here is the list</h3>
          ) : (
            <h3>Nope</h3>
          )
        } */}
        {listOfTodos.map((todo) => (
          // Need key when we are using lists
          <Todo key={todo.id} 
            id={todo.id} 
            todo={todo.todovalue} 
            inprogress={todo.inprogress}/>
          ))
        }
    </div>
  );
}

export default App;