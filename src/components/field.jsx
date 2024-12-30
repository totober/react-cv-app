export default function Field({field, handleDelete, name}){

    return (
        <>
            <label>{field.title} :
                <p>{field.value}</p>
            </label> 
            <button onClick={() => handleDelete(name, field.id, field.required)}>X</button>
        </>
    )
}