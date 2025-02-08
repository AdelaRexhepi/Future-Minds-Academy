import './Header.css';

function Header({ pageTitle, pageDescription }) {
  return (
    <div className="hero">
      <h2>{pageTitle}</h2>
      <p>{pageDescription}</p>
    </div>
  );
}

export default Header;
