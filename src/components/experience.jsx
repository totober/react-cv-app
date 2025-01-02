import { useState } from "react";
import Field from "./field";
import Input from "./input";


export function Experience({fields, setFields}){
let [idCounter, setIdCounter] = useState(fields.experience.length)
let [isEditing, setIsEditing] = useState(true);
let [isAdding, setIsAdding] = useState(false);

function handleSubmit(){

    setIsEditing(false)
    setIsAdding(false)
}


function handleAdd(){

    let newArr = [
        ...fields.experience,
        {
            id: idCounter, 
            company: "Company Name",
            role: "role name",
            responsabilities: "responsabilities of the role",
            details: true, 
            required: null
        }
    ]

    setFields({
        ...fields,
        experience: newArr
    })

    setIdCounter(idCounter + 1)
}

function handleChange(e, prop) {

    let inputID = Number(e.target.dataset.id)
  
    let newArr = fields.experience.map(f => {
  
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
      experience: newArr
    })
  }

function handleDelete(id, required){

    let newArr
    
    if(!required) {
      newArr = fields.experience.filter(f => f.id !== id)
    }

    if(required) {
      newArr = fields.experience.map(f => {

          if(f.id === id) {

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

    setFields({
        ...fields,
        experience: newArr
      })
}


    if(!isEditing && isAdding) {

        return (
            <>
                {   fields.experience.map((p, index) => {
                        let stop = fields.experience.length - 1
                    
                        if(index < stop) {
                            return <FieldExp field={p} handleDelete={handleDelete}/>
                        } else {
                            return <InputExp field={p} handleSubmit={handleSubmit}
                                    handleChange={handleChange}/>
                        }
                    }) 
                }
            <button onClick={handleSubmit}>Submit</button>
            </>
        )
    }

    if(!isEditing && !isAdding) {
        return (
            <>
                {fields.experience.map(f => <FieldExp field={f} handleDelete={handleDelete}/>)}
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => {
                    setIsAdding(true)
                    handleAdd()}}>
                        Add new field
                </button>
            </>
        )
    }

    return (
        <>
            { fields.experience.map(p => <InputExp field={p} handleChange={handleChange}/>) }
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}




export default function FieldExp({field, handleDelete}){

    return (
        <>
            <label>Company name :
                <p>{field.company}</p>
            </label>
            <label>Role :
                <p>{field.role}</p>
            </label>
            <label>Responsabilities :
                <p>{field.responsabilities}</p>
            </label>
            <button onClick={() => handleDelete(field.id, field.required)}>X</button>
        </>
    )
}


function InputExp({field, handleChange}){


    return (
        <>
           <label>Company name :
                    <input type="text" value={field.company} 
                    onChange={(e) => handleChange(e, "company")} data-id={field.id}/>
            </label>
            <label>Role :
                    <input type="text" value={field.role} 
                    onChange={(e) => handleChange(e, "role")} data-id={field.id}/>
            </label>
            <label>Responsabilities :
                <textarea value={field.responsabilities} data-id={field.id}
                onChange={(e) => handleChange(e, "responsabilities")}></textarea>
            </label>
        </>
    )

}