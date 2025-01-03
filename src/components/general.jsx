import { useState } from "react"
import Field from "./field"
import Input from "./input"
import AddField from "./addField"



export function General({fields, handleChange, handleAdd, handleDelete, name, canSubmit}){
let [idCounter, setIdCounter] = useState(fields.length)
let [state, setState] = useState("editing")


    function handleSubmitBtn(){

        canSubmit(name, true)
        setState(null)
    }

    function handleEditBtn(){

        canSubmit(name, false)
        setState("editing")
    }
     
    function handleAddBtn(){

        canSubmit(name, false)
        handleAdd(name, idCounter)
        setState("adding")
        setIdCounter(idCounter + 1)
    }
        
    if(state === "editing") {


        return (
            <>
                { fields.map(f => <Input key={f.id} field={f} handleChange={handleChange} name={name}/>) }
                <button onClick={handleSubmitBtn}>Submit</button>
            </>
        )
    }
    
    if(state === "adding") {
    
        return (
            <>
                {   fields.map((f, index) => {
                        let stop = fields.length - 1
                        
                            if(index < stop) {
                                return <Field key={f.id} field={f} handleDelete={handleDelete} 
                                        name={name}/>
                            } else {
                                return <Input key={f.id} field={f} handleChange={handleChange} 
                                        name={name} state={state}/>
                            }
                    }) 
                }
                <button onClick={handleSubmitBtn}>Submit</button>
            </>
        )
    }
        
    return (
        <>
            {   fields.map(f => <Field key={f.id} field={f} handleDelete={handleDelete} name={name}/>) }
                    <button onClick={handleEditBtn}>Edit</button>
                    <button onClick={handleAddBtn}>Add new field</button>
        </>
    )
}



   