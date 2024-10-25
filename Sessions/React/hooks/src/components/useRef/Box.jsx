import { useRef } from "react";

function Box() {
  const boxRef = useRef(null);

  const handleAnimation = () => {
    boxRef.current.style.transform = "translateX(100px)";
    boxRef.current.style.transition = "transform 0.5s ease";
    boxRef.current.style.backgroundColor = "blue";
  };

  return (
    <>
      <div
        ref={boxRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
      <button onClick={handleAnimation}>Move Box</button>
    </>
  );
}

export default Box;