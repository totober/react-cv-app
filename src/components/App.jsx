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



      function handleAdd(name, idCounter){
    
        dispatch({
          type: "add",
          field: name,
          id: idCounter
        })
      } 

  function handleChange(e, name, prop) {

      dispatch({
        type: "change",
        field: name,
        event: e,
        prop: prop
      })
  }


  function handleDelete(name, id, required){

    dispatch({
      type: "delete",
      field: name,
      id: id,
      required: required
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

    case "delete": {

      let newArr

      if(!action.required) {
        newArr = fields[action.field].filter(f => f.id !== action.id)
      }

      if(action.required && action.field === "experience"){
        
        newArr = fields.experience.map(f => {

          if(f.id === action.id) {

              return {
                ...f,
                company: "",
                role: "",
                responsabilities: ""
              }
          } else {
            
              return f
          }
      })

      }

      if(action.required && action.field !== "experience"){

        newArr = fields[action.field].map(f => {

            if(f.id === action.id) {

                return {
                  ...f,
                  value: ""
                }
            } else {
              
                return f
            }
          })
      }


        return {
          ...fields,
          [action.field]: newArr
        }
    }

    case "change": {

      let target = action.event.target
      let inputID = Number(target.dataset.id)

        let newArr = fields[action.field].map(f => {
      
          if(f.id === inputID) {
              return {
                  ...f,
                  [action.prop]: target.value,
              }
          } else {
              return f
          }
        })
      
      return {
        ...fields,
        [action.field]: newArr
      } 
    }
  }
}

