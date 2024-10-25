import { useState } from "react";

function InputField() {
    const [inputValue, setInputValue] = useState("")

    function handleChange(event) {
        setInputValue(event.target.value)
    }
    return (
        <div>
            <input value={inputValue} type="text" onChange={handleChange} />
            <p>You typed: {inputValue}</p>
        </div>
    )
}

export default InputField;