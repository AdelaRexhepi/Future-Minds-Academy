import Timer from "../components/Timer";

function Home() {
  return (
    <div className="container">
      <h2>Home Page</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias
        dolores harum, mollitia minima libero nisi tenetur quis earum fugiat!
      </p>

      <Timer start={0} />

      <img
        className="image-center"
        src="https://play-lh.googleusercontent.com/0ybd6H4TKpK2wZ7Qvas1b8hReEirGo37YMtzbfLFt0z4FSIfKEuxL3-ejrGm2z3NReR3"
        alt="timer-photo"
      />
    </div>
  );
}

export default Home;
