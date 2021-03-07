import { Button, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { db } from '../firebase_config';
import './Todo.css';

export default function Todo({id, todo, inprogress}) {
  const toggleInProgress = () => {
    db.collection("todos").doc(id).update({
      // inProgress is the KEY, but value is inprogress
      // Notice the difference in case
      inProgress: !inprogress
    })
  };

  const deleteToDo = () => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <div className="todo">
      <ListItem>
        <ListItemText primary={todo} secondary={inprogress ? "In Progress..." : "Completed!"}  />
      </ListItem>
      <Button size="small" onClick={toggleInProgress}>{inprogress ? "Mark as Done" : "Mark as UnDone" }</Button>
      <Button size="small" color="secondary" onClick={deleteToDo}>X</Button>
    </div>
  )
}