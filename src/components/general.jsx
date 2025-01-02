import { useState } from "react"
import Field from "./field"
import Input from "./input"
import AddField from "./addField"



/* export function General({fields, handleChange, handleAdd, handleDelete, name}){
    let [idCounter, setIdCounter] = useState(fields.length)
    let [isEditing, setIsEditing] = useState(true)
    let [isAdding, setIsAdding] = useState(false)


    function handleAddField(name, idCounter){

        handleAdd(name, idCounter)
        setIsAdding(true)
        setIdCounter(idCounter + 1)
    }

    function handleSubmit(){

        setIsEditing(false)
        setIsAdding(false)
    }
    
    if(!isEditing && !isAdding) {
        return (
            <>
                { fields.map(p => <Field field={p} handleDelete={handleDelete} name={name}/>) }
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => handleAddField(name, idCounter)}>Add new field</button>
            </>
        )
    }

    if(!isEditing && isAdding) {

        return (
            <>
                {   fields.map((p, index) => {
                        let stop = fields.length - 1
                    
                        if(index < stop) {
                            return <Field field={p} handleDelete={handleDelete} name={name}/>
                        } else {
                            return <Input field={p} handleSubmit={handleSubmit}
                                    handleChange={handleChange} name={name}/>
                        }
                    }) 
                }
               <button onClick={handleSubmit}>Submit</button>
            </>
        )
    }
    
    return (
        <>
            { fields.map(p => <Input field={p} handleChange={handleChange} name={name}/>) }
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
} */


    export function General({fields, handleChange, handleAdd, handleDelete, name}){
        let [idCounter, setIdCounter] = useState(fields.length)
        let [state, setState] = useState("editing")
    
    
        function handleAddField(name, idCounter){
    
            handleAdd(name, idCounter)
            setState("adding")
            setIdCounter(idCounter + 1)
        }
        
        if(state === "editing") {

            return (
                <>
                    { fields.map(p => <Input field={p} handleChange={handleChange} name={name}/>) }
                    <button onClick={() => setState(null)}>Submit</button>
                </>
            )
    
        }
    
        if(state === "adding") {
    
            return (
                <>
                    {   fields.map((p, index) => {
                            let stop = fields.length - 1
                        
                            if(index < stop) {
                                return <Field field={p} handleDelete={handleDelete} name={name}/>
                            } else {
                                return <Input field={p} handleSubmit={() => setState(null)}
                                        handleChange={handleChange} name={name}/>
                            }
                        }) 
                    }
                   <button onClick={() => setState(null)}>Submit</button>
                </>
            )
        }
        
        return (
            <>
                { fields.map(p => <Field field={p} handleDelete={handleDelete} name={name}/>) }
                <button onClick={() => setState("editing")}>Edit</button>
                <button onClick={() => handleAddField(name, idCounter)}>Add new field</button>
            </>
        )
    }
