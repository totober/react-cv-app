export default function Field({field, handleDelete, name}){

    if(name === "experience") {

        return (
            <>
                <label>Company name :
                    <p>{field.company}</p>
                </label>
                <label>Role :
                    <p>{field.role}</p>
                </label>
                <label>Responsabilities :
                    <p>{field.responsabilities}</p>
                </label>
                <button onClick={() => handleDelete(name, field.id, field.required)}>X</button>
            </>
        )
    }

    return (
        <>
            <label>{field.title} :
                <p>{field.value}</p>
            </label>
            <button onClick={() => handleDelete(name, field.id, field.required)}>X</button>
        </>
    )
}




