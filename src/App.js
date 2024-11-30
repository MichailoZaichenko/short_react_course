import { useState, useEffect } from 'react';
import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name} </h1>
    <h2>Last Name: {props.lastname}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = 'null';
  const isNameShowing = true;
  // hook
  const [counter, setCounter] = useState(0);
  // hook #2
  useEffect(() => {
    alert('You changed the counter to '+counter)
  }, [counter]);

  return (
    <div className="App">
        <h1>Hello, </h1>
        {name ? (
          <>
            <h1> {name}</h1>
          </>
        ): (
          <>
          <h1>test</h1>
          <h2> There is no name</h2>
          </>
        )}
      <Person />
      {/* Props */}
      <Person 
        name={'Misha'} 
        lastname={'Zaichenko'} 
        age={'18'}/>
      {/* If string we can use just '' */}
      <Person name={'Jane'} lastname='Doe' age={2+2}/>
      <button onClick = {() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick = {() => setCounter((prevCount) => prevCount +1)}>+</button>
      
    </div>
  );
}

export default App;
