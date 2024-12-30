import { useState } from "react";
import Field from "./field";
import Input from "./input";


export function Experience(){
let [isEditing, setIsEditing] = useState(true);
let [isAdding, setIsAdding] = useState(false);


function handleSubmit(){

    setIsEditing(false)
    setIsAdding(false)
}



}


function TextArea(){

    return (
        <>
            <label> Main responsabilities:
               <textarea>

                </textarea>
            </label>   
        </>
    )

}