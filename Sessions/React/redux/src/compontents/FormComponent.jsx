import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updateName, resetForm } from "../features/form/FormSlice";

function FormComponent() {
  const { name, email } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleNameChange = (e) => dispatch(updateName(e.target.value));
  const handleEmailChange = (e) => dispatch(updateEmail(e.target.value));
  const reset = () => dispatch(resetForm());

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <h2>Preview:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>

      <button onClick={reset}>Reset</button>
    </>
  );
}

export default FormComponent;
