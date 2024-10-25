import { useEffect, useState } from "react";

function IntervalEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{count}</p>;
}

export default IntervalEffect;