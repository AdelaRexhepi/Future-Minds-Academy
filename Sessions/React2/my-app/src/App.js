import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
  const plans = [
    {
      title: 'Basic',
      subtitle: 'The simplest plan',
      price: 10,
      currency: '$',
      description: 'Ideal for small businesses',
      features: ['Create and edit posts', 'Unlimited Notifications'],
    },
    {
      title: 'Pro',
      subtitle: 'Everything in Basic, plus',
      price: 35,
      currency: '$',
      description: 'Best for growing businesses',
      features: ['Unlimited Requests', 'Priority Support'],
    },
    {
      title: 'Enterprise',
      subtitle: 'Everything in Pro, plus',
      price: 99,
      currency: '$',
      description: 'Perfect for enterprises',
      features: ['24/7 Support', 'Custom Integrations'],
    },
  ];

  return (
    <>
      <Navbar title="Cool SaaS" />
      <Header pageTitle="Payment Plans" pageDescription="Choose from one of the following payment plans" />
      <div className="card-container">
        {plans.map((p, index) => (
          <Card key={index} plan={p} />
        ))}
      </div>
      <Footer credit="© 2024 Cool SaaS" />
    </>
  );
}

export default App;

