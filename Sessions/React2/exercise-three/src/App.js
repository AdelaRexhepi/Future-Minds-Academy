import './App.css';
import Books from './components/Books/Books';
import Button from './components/Button/Button';
import Card from './components/UserCard/Card';

function App() {
  let adela = {
    fullName: 'Adela Rexhepi',
    occupation: 'FMA student',
  };

  let buttonText = 'Clickkk';
  let buttonColor = 'steelblue';

  let books = [
    { book: 'sdsd', author: 'asdaf' }
  ];

  return (
    <>
      <h1>Users</h1>
      <Card user={adela}></Card>
      <Button text={buttonText} color={buttonColor}></Button>
      <h1>Books</h1>
      <div>
        {books.map((b) => (<Books book={b}></Books>))}
      </div>
    </>
  );
}

export default App;
