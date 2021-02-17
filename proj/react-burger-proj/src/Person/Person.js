import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="person">
      <h2>I am {props.name} and age is {props.age}.</h2>
      <p>{props.children}</p>
    </div>
  );
};

export default person;