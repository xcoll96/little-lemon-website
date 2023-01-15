import React from "react";

const DescriptionSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div>
          <h2 className="section-header">About</h2>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant located in
            the heart of Chicago. Adrian and Mario, the owners, have created a
            warm and welcoming atmosphere that makes you feel like you're dining
            in the Mediterranean. The menu features a variety of delicious
            dishes that are made with fresh, high-quality ingredients and
            traditional Mediterranean recipes.
          </p>
          <p>
            The atmosphere is cozy, and the decor features warm tones and
            colorful mosaics that transport you to the Mediterranean. The
            restaurant's signature dish is a delicious lemon chicken, marinated
            in a tangy lemon and herb marinade, grilled to perfection and served
            over a bed of fluffy couscous.
          </p>
          <p>
            Adrian and Mario take pride in their food and service, and they make
            sure that every customer has a memorable dining experience. So if
            you're looking for a taste of the Mediterranean in Chicago, Little
            Lemon is the place to go!
          </p>
        </div>
        <div className="img-composition">
          <img
            className="about-section-img"
            src="/images/about-img-b.jpg"
            alt="Owner 1"
          />
          <img
            className="about-section-img"
            src="/images/about-img-a.jpg"
            alt="Owner 2"
          />
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
