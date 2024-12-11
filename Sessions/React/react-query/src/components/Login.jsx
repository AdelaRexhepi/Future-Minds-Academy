import { useState } from "react";
import { usePostTodos } from "../hooks/usePostTodos";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, sendUser, isError, error } = usePostTodos();

  function handleSubmit(e) {
    e.preventDefault();
    sendUser({ username, password });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading} type="submit">
          {isLoading ? "..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default Login;
