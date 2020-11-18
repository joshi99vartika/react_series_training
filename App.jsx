import React from 'react';
import Header from './Header';



 const fun = function fun(){
        alert('hello');
    } 

function App(){
    return(
        <Header fun = {fun}/>
    );
   
}



export default App;


/*  program 1
const names =["vj","rk","tk"];

<Lists names ={names}/>


*/