import React from 'react';

function Header(props){

    const fun =props.fun;
    return(
        
        <button onClick ={fun}> click me </button>
    );
}

export default Header;






//program 1 
/*
   function Lists(props){
       const names = props.names;
       const ListItems= names.map((names)=><li>{names}</li>);  
                                     
    } 

  returnn(
    <ol> {listItems}</ol>
  );
   
*/