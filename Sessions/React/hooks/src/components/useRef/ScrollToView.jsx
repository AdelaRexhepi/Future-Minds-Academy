import { useRef } from "react";

function ScrollToView() {
  const header = useRef(null);

  function scrollUp(){
    header.current.ScrollToView({behavior: "smooth"})
  }

  return (
    <>
      <h2 ref={header}>Header</h2>
      <div style={{ height: "100vh", background: "lightblue" }}></div>
      <div style={{ height: "100vh", background: "lightgreen" }}></div>
      <button onClick={scrollUp}>Scroll</button>
    </>
  );
}

export default ScrollToView;