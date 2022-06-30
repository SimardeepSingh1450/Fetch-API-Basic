import { useEffect, useState} from 'react';
import './App.css';
import ListItem from './ListItem';

function App() {

const [items,setItems]=useState(null);
const [url,setUrl]=useState("");

 const url1="https://jsonplaceholder.typicode.com/posts";
 const url2="https://jsonplaceholder.typicode.com/users";
 const url3="https://jsonplaceholder.typicode.com/comments";
  
    useEffect(()=>{
      
     const fetchapi=async()=>{
    const response=await fetch(url);
    const data=await response.json();

   setItems(data);
    }
     fetchapi();
    },[url])



  return (
    <div className="App">
      
     <table>
      <tbody>
      <tr>
        <th >
<h5><button onClick={()=>{setUrl(url2)}} >Users</button></h5>
        </th>
<th>
<h5><button onClick={()=>{setUrl(url1)}}>Posts</button></h5>
</th>
       <th>
<h5><button onClick={()=>{setUrl(url3)}}>Comments</button></h5>
       </th>
       <th>
<h5><button onClick={()=>{!setItems(null)&&setUrl("")}}>Reset</button></h5>
       </th>
      </tr>
      </tbody>
       </table>
 <ul><h1>List Display:</h1>
 <ListItem items={items}/>
 </ul>
 
    </div>
  );
}

export default App;
