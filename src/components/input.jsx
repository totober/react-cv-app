import "../styles/input.css"

export default function Input({field, handleChange, name, state = null}){  

    switch(name){

        case "experience": {

            return (
                <>
                   <label>Company name :
                            <input type="text" value={field.company} 
                            onChange={(e) => handleChange(e, name, "company")} data-id={field.id}/>
                    </label>
                    <label>Role :
                            <input type="text" value={field.role} 
                            onChange={(e) => handleChange(e, name, "role")} data-id={field.id}/>
                    </label>
                    <label>Responsabilities :
                        <textarea value={field.responsabilities} data-id={field.id}
                        onChange={(e) => handleChange(e, name, "responsabilities")}></textarea>
                    </label>
                </>
            )
        }

        default: {

            if(state === "adding"){

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

            return (
                <label>{field.title} :
                    <input type="text" value={field.value} 
                    onChange={(e) => handleChange(e, name, "value")} data-id={field.id}/>
                </label> 
            ) 
        }
    }
}


