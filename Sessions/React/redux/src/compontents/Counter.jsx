import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counter/CounterSlice";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter: {value}</h2>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}
export default Counter;
