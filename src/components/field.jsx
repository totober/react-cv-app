import "../styles/field.css"

export default function Field({field, handleDelete, name}){

    if(name === "experience") {

        return (
            <div className="field-exp">
                <label>Company name :
                    <p>{field.company}</p>
                </label>
                <label>Role :
                    <p>{field.role}</p>
                </label>
                <label>Responsabilities :
                    <p>{field.responsabilities}</p>
                </label>
                <button  className ={"delete"} onClick={() => handleDelete(name, field.id, field.required)}>
                    X
                </button>
            </div>
        )
    }

    return (
        <div className="field">
            <label>{field.title} :
                <p>{field.value}</p>
            </label>
            <button  className ={"delete"} onClick={() => handleDelete(name, field.id, field.required)}>
                    X
            </button>
        </div>
    )
}




