import './Card.css';

function Card({ plan }) {
  return (
      <div className="card">
        <img src="https://via.placeholder.com/150" alt="Card Placeholder" />
        <h3>
          {plan.title} - <u>{plan.price}{plan.currency}</u>
        </h3>
        <p>{plan.description}</p>
        <ul className="card-list">
          {
            plan.features.map(f => <li>{f}</li>)
          }
        </ul>
      </div>
  );
}

export default Card;
