import { useState } from 'react'
import { useReducer } from 'react'
import { General } from "./general"
import { Education } from './education'
import { Experience } from './experience'

let initialFields = {
  profile: [
    {id: 0, title: "name", value: "toto ber", details: null, required: true},
    {id: 1, title: "email", value: "totober@hotmail.com", details: null, required: true},
    {id: 2, title: "phone", value: "2324-123456", details: null, required: true}
  ],
  education: [
    {id: 0, title: "school", value: "", details: null, required: true},
    {id: 1, title: "university", value: "", details: null, required: true}
  ],
  experience: [
    {
      id: 0, 
      company: "Company Name",
      role: "role name",
      responsabilities: "responsabilities of the role",
      details: true, 
      required: true
    }
  ]
}


function App() {
  let [fields, dispatch] = useReducer(reducer, initialFields)


  /*   function handleAdd(name, newField){

      newField.id = idCounter

      let newArr = [
        ...fields[name],
        newField
      ]
  
      setFields({
        ...fields,
        [name]: newArr 
      })

      setIdCounter(idCounter + 1)
    }  */ 



/*   function handleAdd(name, idCounter){

      let haveDetails = name === "experience" ? "" : null

      let newArr = [
        ...fields[name],
        {
          id: idCounter,
          title: "",
          value: "",
          details: haveDetails
        }
      ]
  
      setFields({
        ...fields,
        [name]: newArr 
      })

      console.log(newArr)
    }  */ 



      function handleAdd(name, idCounter){
  
        
        dispatch({
          type: "add",
          field: name,
          id: idCounter
        })

  
        console.log(fields)
      } 


/*   function handleChange(e, name) {

    let inputID = Number(e.target.dataset.id)

    let newArr = fields[name].map(f => {

      if(f.id === inputID) {
          return {
              ...f,
              value: e.target.value
          }
      } else {
          return f
      }
      })

    setFields({
      ...fields,
      [name]: newArr
    })
} */

function handleChange(e, name, prop) {

  let inputID = Number(e.target.dataset.id)

  let newArr = fields[name].map(f => {

    if(f.id === inputID) {
        return {
            ...f,
            [prop]: e.target.value,
        }
    } else {
        return f
    }
    })

  setFields({
    ...fields,
    [name]: newArr
  })

}


  function handleDelete(name, id, required){

    let newArr
    
    if(!required) {
      newArr = fields[name].filter(f => f.id !== id)
    }

    if(required) {
      newArr = fields[name].map(f => {

          if(f.id === id) {

              return {
                ...f,
                value: ""
              }
          } else {
            
              return f
          }
      })
    }

    setFields({
      ...fields,
      [name]: newArr
    })
  }

return (
    <>
      <h1>General Information:</h1>
      <General fields={fields.profile} handleChange={handleChange} handleAdd={handleAdd} 
                handleDelete={handleDelete} name={"profile"}/>
      <h1>Education Information:</h1>
      <General fields={fields.education} handleChange={handleChange} handleAdd={handleAdd} 
                handleDelete={handleDelete} name={"education"}/>
      <h1>Experience Information:</h1>
      {/* <Experience fields={fields} setFields={setFields}/> */}
      <General fields={fields.experience} handleChange={handleChange} handleAdd={handleAdd} 
                handleDelete={handleDelete} name={"experience"}/>
    </> 
  )
}

export default App



/* function add(name, idCounter){

  let newObject

  switch(name){

    case "experience":
      newObject = {
        id: idCounter, 
        company: "Company Name",
        role: "role name",
        responsabilities: "responsabilities of the role",
        details: true, 
        required: null
      }
    break;

    default:
      newObject = {
        id: idCounter,
        title: "",
        value: "",
        details: null
      }  
  }

  return newObject
} */

function add(name, idCounter){

  let newObject

  switch(name){

    case "experience":
      newObject = {
        id: idCounter, 
        company: "Company Name",
        role: "role name",
        responsabilities: "responsabilities of the role",
        details: true, 
        required: null
      }
    break;

    default:
      newObject = {
        id: idCounter,
        title: "",
        value: "",
        details: null
      }  
  }

  return newObject
}

function reducer(fields, action){

  switch(action.type){

    case "add": {

      let newField

      if(action.field === "experience"){

        newField = {
          id: action.id, 
          company: "Company Name",
          role: "role name",
          responsabilities: "responsabilities of the role",
          details: true, 
          required: null
        }
      } else {

        newField = {
          id: action.id,
          title: "",
          value: "",
          details: null
        }
      }

      return {
        ...fields,
        [action.field]: [
          ...fields[action.field],
          newField
        ]

      }
    }

  }
}

