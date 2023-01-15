import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-section__text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="lead-paragraph">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <div>
              <Link to="/reservations" className="primary-btn">
                Reserve a table
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className="hero-section__img"
              src="/images/little-lemon-food.jpg"
              alt="Little Lemon restaurant's interior"
              width="400"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
