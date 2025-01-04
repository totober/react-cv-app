import { useState } from "react"
import Field from "./field"
import Input from "./input"
import "../styles/general.css"



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
            <div className={"card"}>
                { fields.map(f => <Input key={f.id} field={f} handleChange={handleChange} name={name}/>) }
                <button onClick={handleSubmitBtn}>Submit</button>
            </div>
        )
    }
    
    if(state === "adding") {
    
        return (
            <div className={"card"}>
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
            </div>
        )
    }
        
    return (
        <div className={"card"}>
            {   fields.map(f => <Field key={f.id} field={f} handleDelete={handleDelete} name={name}/>) }
            <div className={"btn-wrapper"}>
                <button onClick={handleEditBtn}>Edit fields</button>
                <button onClick={handleAddBtn}>Add new field</button>
            </div> 
        </div>
    )
}



   