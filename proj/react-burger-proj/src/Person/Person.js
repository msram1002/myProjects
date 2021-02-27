import React from 'react';
import './Person.css';      // Imported CSS file

const Person = (props) => { 	
  return (
    <div className="Person">
	    <p>I am {props.name} and {props.age} years old!</p>
	    <p>{props.children}</p>
      <button onClick={props.click} style={{float:"right",marginBottom:"10px"}}>Click Here</button>
	  </div>
  )
};

export default Person;
