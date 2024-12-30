import { useState } from "react"
import Field from "./field"
import Input from "./input"
import AddField from "./addField"



export function General({fields, handleChange, handleAdd, handleDelete, name}){
    let [isEditing, setIsEditing] = useState(true)
    let [isAdding, setIsAdding] = useState(false)

    function handleSubmit(){

        setIsEditing(false)
        setIsAdding(false)
    }
    
    if(!isEditing) {
        return (
            <>
                { fields.map(p => <Field field={p} handleDelete={handleDelete} name={name}/>) }
                {isAdding ? <AddField handleAdd={handleAdd} handleSubmit={handleSubmit} name={name}/> 
                            : "" }
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => setIsAdding(true)}>Add</button>
            </>
        )
    }
    
    return (
        <>
            { fields.map(p => <Input field={p} handleChange={handleChange} name={name}/>) }
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

