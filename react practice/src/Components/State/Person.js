import React from 'react'
import './Person.css'




function Person(props) {
    return(
       <div className="Person" key={props.id}>
           <p onClick={props.click}>I'am {props.name} and  I am {props.age} year old!!</p>
           <p>{props.children}</p>
           <input type="text" onChange={props.changed} value={props.name}></input>
       </div>
    )
}

export default Person
// props.data.map((data,index)=>{
//     return(
//         <div>
//             {data.name} <br/>
//             {data.age}
//         </div>
//     )
// })