import Profile from './compontents/Profile';
import './App.css';
import MyButton from './compontents/MyButton';


function App() {
  function clickMe(){
    alert("You clicked!!!")
  }
  function robert(){
    alert("You clicked robert!!!")
  }

  return (
    <>
    <Profile
    img={"/images/GettyImages-1492284655.webp"}
    name={"Leonardo di Caprio"}
    age={50}
    height={"185cm"}
    weight={"80kg"}
    description={"I am Leonardo di Caprio"}
    background={"background-blue"}
    click={clickMe}
    />
    <Profile
    img={"/images/robert.jpg"}
    name={"Robert Downey"}
    age={55}
    height={"170cm"}
    weight={"80kg"}
    description={"I am Robert Downey"}
    background={"background-green"}
    click={robert}
    />
    <MyButton>Button One</MyButton>
    <MyButton>Button Two</MyButton>
    </>
  )
}

export default App;
