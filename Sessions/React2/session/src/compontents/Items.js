import React from 'react';
import { useState } from "react";
import './Items.css'

function Items(){
    let [items, setItems] = useState([]);
    let [inputText, setInputText] = useState('')
    let [searchText, setSearchText] = useState('')

    function updateSearchText(e) {
        setSearchText(e.target.value);
    }

    function updateInputText(e){
        setInputText(e.target.value);
    }

    function addItem(){
        setItems([InputText, ...items]);
        setInputText('')
    }

        return <div>
            <button>Search</button>
            <input value={searchText} onInput={updateSearchText}type ='text' placeholder="Item"/>
            <input value={inputText} onInput={updateInputText}type ='text' placeholder="Item"/>
            <button onClick={addItem}>Add</button>
            <ol>
                {
                    Items.filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
                         .map(item => <li>{item} <button>X</button></li>)
                }
            </ol>
        </div>
    
}
export default Items;