import { useState } from "react";

function Input() {
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

export default Input;