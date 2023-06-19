
import './App.css';

function App() {
  // number , string , arrarys are fine to return the values 
const title = "welcome to the react js tutorils"
const likes = 50
// const person = {name: "pratap",age : 21} in react we can not return object and booleans
const link = "https://www.mrparuiweb.dev"
  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p>likes : {likes} </p>

         {/* <p> {person} </p> */}

         <p>{10} </p>
         <p> {"hello react devs"} </p>
         <p>{[1,2,3,4,5]} </p>
         <p>{Math.random()*100}</p>
         <a href={link}>mr parui web</a>
      </div>
    </div>
  );
}

export default App;
