import React, { Component } from 'react'
import Person from './Person'


export class Persons1 extends Component {
constructor(){
    super()
    this.state={
        persons:[{ id:'1a',name:'akash',age:23},
                 { id:'2b',name:'gowtham',age:19},
                 { id:'3c',name:'pritesh',age:23}
    ],
    showPersons:false
    }
}
// togglePersonsHandler=()=>{
//     console.log("inside Handler")
//     const doesShow = this.state.showPersons;
//     this.setState({
//         showPersons:!doesShow
//     })
// }

// 
deletePersonHandler=(personIndex)=>{
console.log("deletePersonHandler")
   // const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({
        persons:persons
    })


}

   nameChangeHandler = (event,id) => {

    const personIndex = this.state.persons.find(p=>{
        return p.id === id;
    })
     const person = {...this.state.persons[personIndex]}
           person.name = event.target.value;
           const persons = [...this.state.persons]
            persons[personIndex]=person

    this.setState({
        persons:[{name:'Raju',age:23},
            {name:event.target.value,age:19},
            {name:'Ravi',age:33}
    ],
    })
   }

   togglePersonsHandler=()=>{
          console.log("Inside togglePersonsHandler")
           
        const doesShow=this.state.showPersons
          
          this.setState({
            showPersons:!doesShow
            })
     
   }







    render() {
        // let persons=null
        // if(this.state.showPersons){
        //     persons = (
        //         <div>
        //              <Person data={this.state.persons} ></Person>
        //         </div>
        //     );
        // }


      const style = {
          backgroundColor:'white',
          font:'inheret',
          border:'1x solid blue',
          padding:'8px',
          cursor:'pointer'
      }


        return (
            <div className="App">
                {/* <button onClick={this.togglePersonsHandler}>Switch</button>  */}
                <button style={style} 
                 onClick={this.togglePersonsHandler}>Switch</button>
                {/* {persons} */}
                 
                 {this.state.showPersons ?

                 <div  >

                   {this.state.persons.map((person, index)=>{
                       
                      return <Person name={person.name} 
                      age ={person.age} 
                      click={() => this.deletePersonHandler(index)}
                      key={person.id}
                      changed={(event)=>this.nameChangeHandler(event ,person.id)}
                      ></Person>

                 })}
    
                </div>:null }
            </div>
        )
    }
}

export default Persons1
