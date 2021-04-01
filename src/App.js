import React, {useEffect} from 'react'
import './App.css';
import axios from 'axios'


function App() {

useEffect(() => {
//   async function getGlobalData() {
 
//     const response = await fetch('/api/user');
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
    
// }
// getGlobalData();



axios.get('/api/user')
.then(response=>{
  console.log(response.data)
})
}, [])
  return (
    <div className="App">
  <h2>Hello World from MERN STACK </h2>
    </div>
  );
}

export default App;
