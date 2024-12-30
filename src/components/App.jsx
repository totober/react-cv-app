import { useState } from 'react'
import { General } from "./general"
import { Education } from './education'


function App() {
  let [idCounter, setIdCounter] = useState(6)
  let [fields, setFields] = useState({
      profile: [
        {id: 0, title: "name", value: "toto ber", required: true},
        {id: 1, title: "email", value: "totober@hotmail.com", required: true},
        {id: 2, title: "phone", value: "2324-123456", required: true}
      ],
      education: [
        {id: 3, title: "school", value: "", required: true},
        {id: 4, title: "university", value: "", required: true}
      ],
      experience: [
        {id: 5, title: "Company Name", value: "", details: "", required: true }
      ]
    })



    function handleAdd(name, newField){

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
    }  


  function handleChange(e, name) {

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
    </>
  )
}

export default App
