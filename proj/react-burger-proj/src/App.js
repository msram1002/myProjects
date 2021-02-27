import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '123', name: 'Lucy', age: 23},
      {id: '456', name: 'Max', age: 12},
      {id: '789',name: 'Mike', age: 34},
    ],
    showPersons: false    
  };   

  switchNameHandler = () => {
    // alert('it clicked');
    this.setState({		// correct
      persons: [
        {name: 'John', age: 45},
        {name: 'Robert', age: 12},
        {name: 'Mike', age: 55},
      ]
    });
  }

  togglePersonsHandler = () => {
    const doShow = this.state.showPersons;  
    // this either can be true or false
    this.setState({showPersons: !doShow});
  }

  deletePersonHandler = (personIndex) => {
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({persons:newPersons});
  }
  
  render() {
    const style = {
			backgroundColor: 'lightblue',
			font: 'inherit',
			border: '1px solid black',
			padding: '8px',
			borderRadius: '4px',
			boxShadow: '0 2px 3px #ccc',
      cursor:'pointer',
      ':hover': {  // Any sudo selectors you can use
        backgroundColor: 'darkgreen',
        color: 'white'
      }
    
		};

    let persons = null;

    if (this.state.showPersons) {  // Boolean value
      persons = (
        <div>
          {/* <Person name="Mike" age="47">
            My Hobbies: Dancing and Singing
          </Person> */}
          {this.state.persons.map((person, index) => {
              return <Person click={() => this.deletePersonHandler(index)} 
              name={person.name} age={person.age}
              key={person.id} />;
            })
          }
		      {/* <Person name="Mike" age="47">
            My Hobbies: Dancing and Singing
          </Person>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
					<Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
					<Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      );
      style.backgroundColor = 'lightgrey';
      style[':hover'] = { backgroundColor: 'salmon'};
    }

    let classes = [];
    
    if (this.state.persons.length <= 2) {
      classes.push('orange');
    }

    if (this.state.persons.length <= 1) {
      classes.push('orange changeOrange');
    }

    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hello React!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Content</button>
        {persons}
      </div>
    )
  }
}

export default Radium(App);

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = props => {
//   const [personData, setPersonData] = useState ({
//     persons: [
//       {name: 'Lucy', age: 23},
//       {name: 'Max', age: 12},
//       {name: 'Mike', age: 34}
//     ],
//     OtherData: "Something"
//   });

//   const switchNameHandler = () => {
//     // alert('it clicked');
//     setPersonData ({
//       persons: [
//         {name: 'John', age: 45},
//         {name: 'Robert', age: 12},
//         {name: 'Mike', age: 55}
//       ],
//     // OtherData: "Something"      
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hello React!</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name="Max" age="27">
// 	      My Hobbies: Dancing and Racing
// 	    </Person>
//       <Person name={personData.persons[0].name} age={personData.persons[0].age} />
//       <Person name={personData.persons[1].name} age={personData.persons[1].age} />
//       <Person name={personData.persons[2].name} age={personData.persons[2].age} />
//     </div>
//   )
// }

// export default App;
