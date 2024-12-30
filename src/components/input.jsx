export default function Input({field, handleChange, name}){    
    
    return (
        <>
            <label>{field.title} :
                <input type="text" value={field.value} 
                onChange={(e) => handleChange(e, name)} data-id={field.id}/>
            </label>
        </> 
    )
}
