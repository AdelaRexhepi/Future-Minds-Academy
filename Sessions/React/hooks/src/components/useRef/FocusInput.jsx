function FocusInput(){
    const text = useRef(null);
    function focusText(){
        text.current.focus();
    }
    return (
        <div>
            <input ref={text} type="text"/>
            <button onClick={focusText}>Click</button>
        </div>
    )
}
export default FocusInput;