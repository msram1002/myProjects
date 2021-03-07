import React from 'react';
import './Person.css';      // Imported CSS file
import styled from 'styled-components';

const Person = (props) => { 	
  // const style = {
	// 	'@media (min-width: 500px)': {
	// 		width: '450px',
	// 	},
	// };

  const StyledDiv = styled.div`
    width: 250px;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    height: 100px;

    @media (min-width: 500px) {
			width: 450px;
		}
  `;

  return (
    <StyledDiv>
      <p>I am {props.name} and {props.age} years old!</p>
	    <p>{props.children}</p>
      <button onClick={props.click} style={{float:"right",marginBottom:"10px"}}>Click Here</button>
    </StyledDiv>
    //  <div className="Person" style={style}>
	  //  </div>
  )
};

export default Person;
