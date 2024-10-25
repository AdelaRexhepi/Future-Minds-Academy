import { useState } from "react";

function Array(){
const [items, setItems] = useState([]);
function addItem(){
    const newItem = `Item ${items.length +1}`
    setItems((prevItems) => [...prevItems, newItem])
}
    return (
    <div>
        <button onClick={addItem}>Click</button>
        <ul>
            {items.map((item) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
    );
}
export default Array;