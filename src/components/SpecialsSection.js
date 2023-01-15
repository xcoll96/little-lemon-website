import React from "react";

const SpecialSection = () => {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <h2>Specials</h2>
          <a className="primary-btn" href="online-menu">
            Online Menu
          </a>
        </div>
        <div className="highlights-wrapper">
          <div className="hightlights-card">
            <img
              src="/images/greek-salad-little-lemon.jpg"
              alt="Greek salad"
              width="400"
            />

            <div>
              <div className="hightlights-card__header">
                <h3>Greek Salad</h3>
                <span className="hightlights-card__price-tag">$12.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a className="text-btn" href="order-online">
                <span>Order a delivery</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                >
                  <path d="M328 56c0-13.3 10.7-24 24-24h41.3c23.8 0 45.1 15.1 52.9 37.6l8.1 23.3 51-25.5c4.4-2.2 9.3-3.4 14.3-3.4H528c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-8.4c-5 0-9.9-1.2-14.3-3.4l-34.9-17.5L500 224.4c4-.3 8-.4 12-.4c43.7 0 83.3 17.5 112.1 45.8c9.5 9.3 9.6 24.5 .3 33.9s-24.5 9.6-33.9 .3C570.2 284.2 542.6 272 512 272c-52.7 0-97 36.5-108.9 85.6c-2 8.4-3.1 17.3-3.1 26.4H368 352 256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32V320c0-70.7 57.3-128 128-128h96c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h77.3c16.8-38.5 48.4-69.2 87.6-84.7L400.8 85.4c-1.1-3.2-4.2-5.4-7.6-5.4H352c-13.3 0-24-10.7-24-24zM128 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32 336c26.5 0 48-21.5 48-48H112c0 26.5 21.5 48 48 48zm352 0c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm0 48c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hightlights-card">
            <img src="/images/bruschetta-little-lemon.jpg" alt="Brushetta" />

            <div>
              <div className="hightlights-card__header">
                <h3>Brushetta</h3>
                <span className="hightlights-card__price-tag">$7.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a className="text-btn" href="order-online">
                <span>Order a delivery</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                >
                  <path d="M328 56c0-13.3 10.7-24 24-24h41.3c23.8 0 45.1 15.1 52.9 37.6l8.1 23.3 51-25.5c4.4-2.2 9.3-3.4 14.3-3.4H528c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-8.4c-5 0-9.9-1.2-14.3-3.4l-34.9-17.5L500 224.4c4-.3 8-.4 12-.4c43.7 0 83.3 17.5 112.1 45.8c9.5 9.3 9.6 24.5 .3 33.9s-24.5 9.6-33.9 .3C570.2 284.2 542.6 272 512 272c-52.7 0-97 36.5-108.9 85.6c-2 8.4-3.1 17.3-3.1 26.4H368 352 256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32V320c0-70.7 57.3-128 128-128h96c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h77.3c16.8-38.5 48.4-69.2 87.6-84.7L400.8 85.4c-1.1-3.2-4.2-5.4-7.6-5.4H352c-13.3 0-24-10.7-24-24zM128 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32 336c26.5 0 48-21.5 48-48H112c0 26.5 21.5 48 48 48zm352 0c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm0 48c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hightlights-card">
            <img
              src="/images/lemon-cake-little-lemon.jpg"
              alt="Lemon Dessert"
            />
            <div>
              <div className="hightlights-card__header">
                <h3>Lemon Dessert</h3>
                <span className="hightlights-card__price-tag">$6.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a className="text-btn" href="order-online">
                <span>Order a delivery</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                >
                  <path d="M328 56c0-13.3 10.7-24 24-24h41.3c23.8 0 45.1 15.1 52.9 37.6l8.1 23.3 51-25.5c4.4-2.2 9.3-3.4 14.3-3.4H528c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-8.4c-5 0-9.9-1.2-14.3-3.4l-34.9-17.5L500 224.4c4-.3 8-.4 12-.4c43.7 0 83.3 17.5 112.1 45.8c9.5 9.3 9.6 24.5 .3 33.9s-24.5 9.6-33.9 .3C570.2 284.2 542.6 272 512 272c-52.7 0-97 36.5-108.9 85.6c-2 8.4-3.1 17.3-3.1 26.4H368 352 256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32V320c0-70.7 57.3-128 128-128h96c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h77.3c16.8-38.5 48.4-69.2 87.6-84.7L400.8 85.4c-1.1-3.2-4.2-5.4-7.6-5.4H352c-13.3 0-24-10.7-24-24zM128 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32 336c26.5 0 48-21.5 48-48H112c0 26.5 21.5 48 48 48zm352 0c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm0 48c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
