import { useState } from "react";

function Form(){
const [formData, setFormData] = useState({name: "", emial: ""});

function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value});
}
function handleSubmit(e){
    e.preventDefault()
    console.log(formData);
}

return(
    <form>
        <input type="text" onChange={handleChange} value={formData.name} name="name" id="" />
        <input type="email" onChange={handleChange} value={formData.email} name="email" id="" />
        <button type="submit" onChange={handleSubmit}> Submit </button>
    </form>
)

}