import { useEffect, useState } from "react";

function Timer({ start }) {
  const [seconds, setSeconds] = useState(start);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning === false) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <div className="timer">
        <h1>Timer: {seconds} seconds</h1>
        <div className="btn-container">
          <button onClick={() => setIsRunning(true)} className="timerBtn">
            Start
          </button>
          <button onClick={() => setIsRunning(false)} className="timerBtn">
            Stop
          </button>
          <button onClick={() => setSeconds(start)} className="timerBtn">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default Timer;
