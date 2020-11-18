import React,{useState} from 'react'

function Objectstatehook() {

   /*
        exmaple 1 using spread operator
   const[data, setData] = useState({
        'name' : "vartika",
        'age' : 23 

       inside return
       <h1> {data.name}</h1>
        <h1> {data.age}</h1>
     <button onClick = {()=>setData({...data,name: "arpita"})}> change name </button>
    })*/


        /*
                     exmaple 2 by making seperate component
        
        const [name , setName] = useState('vartika');
        const [age , setAge] = useState (23)


            inside return
            <h1> {name}</h1>
            <h1> {age}</h1>
            <button onClick = {()=>setAge("20")}> change age </button>
            <button onClick = {()=>setName("arpita")}> change name </button>
        */


        // example 3 of useState with object

        const [name,setName] = useState({ firstname :"" , lastname : ""});

        return (
        <>

            <form>
                <input type = "text" value = {name.firstname} onChange = {e=>{setName({...name,firstname:e.target.value})}}/>
                <input type = "text" value = {name.lastname} onChange = {e=>{setName({...name,lastname:e.target.value})}}/>

                <h1>your fname is -{name.firstname}</h1>
                <h1>your Lname is -{name.lastname}</h1>
                <h2> {JSON.stringify(name)}</h2>
                </form>
            
        </>
    )
}

export default Objectstatehook
