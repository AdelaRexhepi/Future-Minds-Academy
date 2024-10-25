import { useEffect, useState } from "react";

function Log() {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    console.log("Hi, useEffect");
  }, [isTrue]);

  function toggleTrue() {
    setIsTrue(!isTrue);
  }

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <h2>Hello, useEffect</h2>
      <button onClick={toggleTrue}>Toggle True</button>
    </>
  );
}

export default Log;