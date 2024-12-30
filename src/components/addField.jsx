import { useState } from "react"

export default function AddField({handleAdd, handleSubmit, name}){
    let [newField, setNewField] = useState({title:"new field", value: "new field", required: false})

    function handleTitle(e){
        setNewField({
            ...newField,
            title: e.target.value
        })
    }

    function handleValue(e){
        setNewField({
            ...newField,
            value: e.target.value
        })
    }

    function handleAddField(name, newField, handleAdd, handleSubmit){

        handleAdd(name, newField)
        handleSubmit()
    }

    return (
        <>
        <h3>Add a new field:</h3>
            <label>Title:
                <input type="text" value={newField.title} onChange={(e) => handleTitle(e)}/>
            </label>
            <label>Value:
                <input type="text" value={newField.value} onChange={(e) => handleValue(e)}/>
            </label>
            <button onClick={() => handleAddField(name, newField, handleAdd, handleSubmit)}>Add Field</button>
        </> 
    )
}