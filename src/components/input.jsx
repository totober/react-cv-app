/* export default function Input({field, handleChange, name}){    
    
    return (
        <>
            <label>{field.title} :
                <input type="text" value={field.value} 
                onChange={(e) => handleChange(e, name)} data-id={field.id}/>
            </label>
        </> 
    )
} */


export default function Input({field, handleChange, name}){  
    

    if(field.required && field.details){

        return (
            <>
                <label>{field.title} :
                    <input type="text" value={field.value} 
                    onChange={(e) => handleChange(e, name, "value")} data-id={field.id}/>
                </label>
                <label> Main responsabilities:
                    <textarea value={field.details} onChange={(e) => handleChange(e, name, "details")} data-id={field.id}></textarea>
                </label>   
            </>
                
        )
    }

    if(field.required){

        return (
            <label>{field.title} :
                <input type="text" value={field.value} 
                onChange={(e) => handleChange(e, name, "value")} data-id={field.id}/>
            </label> 
        )
    }

    if(!field.required && field.details){

        return (
            <>
                <label>{field.title} :
                    <input type="text" value={field.value} 
                    onChange={(e) => handleChange(e, name, "value")} data-id={field.id}/>
                </label>
                <label> Main responsabilities:
                    <textarea onChange={(e) => handleChange(e, name, "details")}></textarea>
                </label>  
            </>
        )
    }
    

    return (
        <>  
             <label>Title:
                <input type="text" value={field.title} 
                onChange={(e) => handleChange(e, name, "title")} data-id={field.id}/>
            </label>
            <label>Value:
                <input type="text" value={field.value} 
                onChange={(e) => handleChange(e, name, "value")} data-id={field.id}/>
            </label>
        </> 
    )
}


function TextArea({handleChange, name}){

    return (
        <>
            <label> Main responsabilities:
               <textarea onChange={(e) => handleChange(e, name)}>

                </textarea>
            </label>   
        </>
    )

}
