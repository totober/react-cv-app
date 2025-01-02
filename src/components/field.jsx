export default function Field({field, handleDelete, name}){

    return (
        <>
            <label>{field.title} :
                <p>{field.value}</p>
            </label>
            {field.details && 
            <label> Main responsabilities:
                <p>{field.details}</p>
            </label> }
            <button onClick={() => handleDelete(name, field.id, field.required)}>X</button>
        </>
    )
}



{/*  <label> Main responsabilities:
                <textarea onChange={(e) => handleChange(e, name)}></textarea>
            </label> } */}