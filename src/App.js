import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const nayoks = ['Anowar', 'Jafor', 'Alomgir', 'Salmansha', 'Bappi'];
  const products = [
    {name: 'PhotoS hop', price: '$343'},
    {name: 'Illustrator', price: '$454.43'},
    {name: 'Illustrator', price: '$454.43'},
  ];

  const productNames = products.map(product => product.name);
  const nayokNames = nayoks.map(nayka => nayka)
  console.log(productNames);
  console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product ={pd}></Product>)
        }
        
        <Person name ={nayoks[0]}></Person>
        <Person name = "Elias Kanshon" nayka = "Bobita"></Person>
        <Person name = "Shamsl Alam" nayka = "Fahmeda"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);

  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick ={() => setCount(count - 1)}>Decrease</button>
      <button onClick = {handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
          
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightBlue',
    height: '300px',
    width: '500px',
    float: 'left',
    
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style ={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}


function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '30px'
  }
  
  return (
    <div style ={personStyle}>
  <h1>Name: {props.name}</h1>
  <h3>Hero of {props.nayka}</h3>
  </div>
  )
}

export default App;
