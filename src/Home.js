import { useState } from "react";

const Home = () => {

    // let name = 'bapi' ;
    const [name,setName] = useState('Ayush');
    const[age,setAge] = useState(12);

const handleClick = () => {
    // using use state hooks 
    setName('Pratap');
    setAge(21);
//    name = 'pratap'
//    console.log(name);
 
}
    return ( 
        <div className="homepage">
            <h2>Homepage</h2>
            <p>Hey I'm {name} & My age is {age} years old</p>
            <button onClick={handleClick} >click me</button>
        </div>
     );
}
 
export default Home;

// tutorials pratice of click events 

// const Home = () => {

//     const handleClick = (e) => {
//         console.log('hello, parui',e);
//     }
    
//     const handleClickAgain = (name,e) => {
//         console.log('hello'+ name,e.target);
//     }
    
//         return ( 
//             <div className="homepage">
//                 <h2>Homepage</h2>
//                 <button onClick={handleClick} >click me</button>
//                 <button onClick={(e) => {handleClickAgain('bapi',e)}}>click me again</button>
//             </div>
//          );
//     }
     