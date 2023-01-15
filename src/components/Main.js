const Main = () => {
  return (
    <>
      <main>
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
                <a href="/reserve" className="primary-btn">Reserve a table</a>
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
        <section>
          <div className="container">
            <div className="section-header">
              <h2>Specials</h2>
              <a className="primary-btn" href="online-menu">Online Menu</a>
            </div>
            <div className="highlights-wrapper">
            <div className="hightlights-card">
                <img src="/images/greek-salad-little-lemon.jpg" alt="Greek salad" width="400" />

                <div>
                  <div className="hightlights-card__header">
                    <h3>Greek Salad</h3>
                    <span className="hightlights-card__price-tag">$12.99</span>
                  </div>
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>
                  <a className="text-btn" href="order-online">
                    <span>Order a delivery</span>
                    <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M328 56c0-13.3 10.7-24 24-24h41.3c23.8 0 45.1 15.1 52.9 37.6l8.1 23.3 51-25.5c4.4-2.2 9.3-3.4 14.3-3.4H528c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-8.4c-5 0-9.9-1.2-14.3-3.4l-34.9-17.5L500 224.4c4-.3 8-.4 12-.4c43.7 0 83.3 17.5 112.1 45.8c9.5 9.3 9.6 24.5 .3 33.9s-24.5 9.6-33.9 .3C570.2 284.2 542.6 272 512 272c-52.7 0-97 36.5-108.9 85.6c-2 8.4-3.1 17.3-3.1 26.4H368 352 256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32V320c0-70.7 57.3-128 128-128h96c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h77.3c16.8-38.5 48.4-69.2 87.6-84.7L400.8 85.4c-1.1-3.2-4.2-5.4-7.6-5.4H352c-13.3 0-24-10.7-24-24zM128 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32 336c26.5 0 48-21.5 48-48H112c0 26.5 21.5 48 48 48zm352 0c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm0 48c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"/></svg>
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
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>
                  <a className="text-btn" href="order-online">
                    <span>Order a delivery</span>
                    <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M328 56c0-13.3 10.7-24 24-24h41.3c23.8 0 45.1 15.1 52.9 37.6l8.1 23.3 51-25.5c4.4-2.2 9.3-3.4 14.3-3.4H528c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-8.4c-5 0-9.9-1.2-14.3-3.4l-34.9-17.5L500 224.4c4-.3 8-.4 12-.4c43.7 0 83.3 17.5 112.1 45.8c9.5 9.3 9.6 24.5 .3 33.9s-24.5 9.6-33.9 .3C570.2 284.2 542.6 272 512 272c-52.7 0-97 36.5-108.9 85.6c-2 8.4-3.1 17.3-3.1 26.4H368 352 256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32V320c0-70.7 57.3-128 128-128h96c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h77.3c16.8-38.5 48.4-69.2 87.6-84.7L400.8 85.4c-1.1-3.2-4.2-5.4-7.6-5.4H352c-13.3 0-24-10.7-24-24zM128 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32 336c26.5 0 48-21.5 48-48H112c0 26.5 21.5 48 48 48zm352 0c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm0 48c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"/></svg>
                  </a>
                </div>
                </div>
                <div className="hightlights-card">
                <img src="/images/lemon-cake-little-lemon.jpg" alt="Lemon Dessert" />
                <div>
                  <div className="hightlights-card__header">
                    <h3>Lemon Dessert</h3>
                    <span className="hightlights-card__price-tag">$6.99</span>
                  </div>
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>
                  <a className="text-btn" href="order-online">
                    <span>Order a delivery</span>
                    <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M328 56c0-13.3 10.7-24 24-24h41.3c23.8 0 45.1 15.1 52.9 37.6l8.1 23.3 51-25.5c4.4-2.2 9.3-3.4 14.3-3.4H528c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-8.4c-5 0-9.9-1.2-14.3-3.4l-34.9-17.5L500 224.4c4-.3 8-.4 12-.4c43.7 0 83.3 17.5 112.1 45.8c9.5 9.3 9.6 24.5 .3 33.9s-24.5 9.6-33.9 .3C570.2 284.2 542.6 272 512 272c-52.7 0-97 36.5-108.9 85.6c-2 8.4-3.1 17.3-3.1 26.4H368 352 256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32V320c0-70.7 57.3-128 128-128h96c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h77.3c16.8-38.5 48.4-69.2 87.6-84.7L400.8 85.4c-1.1-3.2-4.2-5.4-7.6-5.4H352c-13.3 0-24-10.7-24-24zM128 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32 336c26.5 0 48-21.5 48-48H112c0 26.5 21.5 48 48 48zm352 0c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm0 48c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"/></svg>
                  </a>
                </div>
                </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="container">
              <h2 className="section-header">Testimonials</h2>
            <div className="testimonials-wrapper">
              <div className="testimonial-card">
                <div>
                <svg width="106" height="16" viewBox="0 0 106 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_398_253)">
<path d="M10.1486 0.5625C9.98301 0.21875 9.63301 0 9.24864 0C8.86426 0 8.51739 0.21875 8.34864 0.5625L6.33926 4.69688L1.85176 5.35938C1.47676 5.41563 1.16426 5.67812 1.04864 6.0375C0.933014 6.39687 1.02676 6.79375 1.29551 7.05937L4.55176 10.2812L3.78301 14.8344C3.72051 15.2094 3.87676 15.5906 4.18614 15.8125C4.49551 16.0344 4.90489 16.0625 5.24239 15.8844L9.25176 13.7437L13.2611 15.8844C13.5986 16.0625 14.008 16.0375 14.3174 15.8125C14.6268 15.5875 14.783 15.2094 14.7205 14.8344L13.9486 10.2812L17.2049 7.05937C17.4736 6.79375 17.5705 6.39687 17.4518 6.0375C17.333 5.67812 17.0236 5.41563 16.6486 5.35938L12.158 4.69688L10.1486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip1_398_253)">
<path d="M32.1486 0.5625C31.983 0.21875 31.633 0 31.2486 0C30.8643 0 30.5174 0.21875 30.3486 0.5625L28.3393 4.69688L23.8518 5.35938C23.4768 5.41563 23.1643 5.67812 23.0486 6.0375C22.933 6.39687 23.0268 6.79375 23.2955 7.05937L26.5518 10.2812L25.783 14.8344C25.7205 15.2094 25.8768 15.5906 26.1861 15.8125C26.4955 16.0344 26.9049 16.0625 27.2424 15.8844L31.2518 13.7437L35.2611 15.8844C35.5986 16.0625 36.008 16.0375 36.3174 15.8125C36.6268 15.5875 36.783 15.2094 36.7205 14.8344L35.9486 10.2812L39.2049 7.05937C39.4736 6.79375 39.5705 6.39687 39.4518 6.0375C39.333 5.67812 39.0236 5.41563 38.6486 5.35938L34.158 4.69688L32.1486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip2_398_253)">
<path d="M54.1486 0.5625C53.983 0.21875 53.633 0 53.2486 0C52.8643 0 52.5174 0.21875 52.3486 0.5625L50.3393 4.69688L45.8518 5.35938C45.4768 5.41563 45.1643 5.67812 45.0486 6.0375C44.933 6.39687 45.0268 6.79375 45.2955 7.05937L48.5518 10.2812L47.783 14.8344C47.7205 15.2094 47.8768 15.5906 48.1861 15.8125C48.4955 16.0344 48.9049 16.0625 49.2424 15.8844L53.2518 13.7437L57.2611 15.8844C57.5986 16.0625 58.008 16.0375 58.3174 15.8125C58.6268 15.5875 58.783 15.2094 58.7205 14.8344L57.9486 10.2812L61.2049 7.05937C61.4736 6.79375 61.5705 6.39687 61.4518 6.0375C61.333 5.67812 61.0236 5.41563 60.6486 5.35938L56.158 4.69688L54.1486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip3_398_253)">
<path d="M76.1486 0.5625C75.983 0.21875 75.633 0 75.2486 0C74.8643 0 74.5174 0.21875 74.3486 0.5625L72.3393 4.69688L67.8518 5.35938C67.4768 5.41563 67.1643 5.67812 67.0486 6.0375C66.933 6.39687 67.0268 6.79375 67.2955 7.05937L70.5518 10.2812L69.783 14.8344C69.7205 15.2094 69.8768 15.5906 70.1861 15.8125C70.4955 16.0344 70.9049 16.0625 71.2424 15.8844L75.2518 13.7437L79.2611 15.8844C79.5986 16.0625 80.008 16.0375 80.3174 15.8125C80.6268 15.5875 80.783 15.2094 80.7205 14.8344L79.9486 10.2812L83.2049 7.05937C83.4736 6.79375 83.5705 6.39687 83.4518 6.0375C83.333 5.67812 83.0236 5.41563 82.6486 5.35938L78.158 4.69688L76.1486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip4_398_253)">
<path d="M98.1486 0.5625C97.983 0.21875 97.633 0 97.2486 0C96.8643 0 96.5174 0.21875 96.3486 0.5625L94.3393 4.69688L89.8518 5.35938C89.4768 5.41563 89.1643 5.67812 89.0486 6.0375C88.933 6.39687 89.0268 6.79375 89.2955 7.05937L92.5518 10.2812L91.783 14.8344C91.7205 15.2094 91.8768 15.5906 92.1861 15.8125C92.4955 16.0344 92.9049 16.0625 93.2424 15.8844L97.2518 13.7437L101.261 15.8844C101.599 16.0625 102.008 16.0375 102.317 15.8125C102.627 15.5875 102.783 15.2094 102.721 14.8344L101.949 10.2812L105.205 7.05937C105.474 6.79375 105.571 6.39687 105.452 6.0375C105.333 5.67812 105.024 5.41563 104.649 5.35938L100.158 4.69688L98.1486 0.5625Z" fill="#F4CE14"/>
</g>
<defs>
<clipPath id="clip0_398_253">
<rect width="18" height="16" fill="white"/>
</clipPath>
<clipPath id="clip1_398_253">
<rect width="18" height="16" fill="white" transform="translate(22)"/>
</clipPath>
<clipPath id="clip2_398_253">
<rect width="18" height="16" fill="white" transform="translate(44)"/>
</clipPath>
<clipPath id="clip3_398_253">
<rect width="18" height="16" fill="white" transform="translate(66)"/>
</clipPath>
<clipPath id="clip4_398_253">
<rect width="18" height="16" fill="white" transform="translate(88)"/>
</clipPath>
</defs>
                </svg>
                </div>
                <div className="testimonial-card__header">
                  <img className="testimonial-headshot" src="/images/michael.jpg" alt="Testimonial" />
                  <div>
                    <span className="testimonial-name">Michael L.</span>
                    <span className="testimonial-job-title">Nurse Practitioner</span>
                  </div>
                </div>
                <p>Little Lemon is a hidden gem! The food is always fresh and delicious, and the staff is friendly and attentive. I especially love their lemon-herb chicken - it's to die for!
                </p>
              </div>
              <div className="testimonial-card">
                <div>
                <svg width="107" height="16" viewBox="0 0 107 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_417_178)">
<path d="M10.6486 0.5625C10.483 0.21875 10.133 0 9.74864 0C9.36426 0 9.01739 0.21875 8.84864 0.5625L6.83926 4.69688L2.35176 5.35938C1.97676 5.41563 1.66426 5.67812 1.54864 6.0375C1.43301 6.39687 1.52676 6.79375 1.79551 7.05937L5.05176 10.2812L4.28301 14.8344C4.22051 15.2094 4.37676 15.5906 4.68614 15.8125C4.99551 16.0344 5.40489 16.0625 5.74239 15.8844L9.75176 13.7437L13.7611 15.8844C14.0986 16.0625 14.508 16.0375 14.8174 15.8125C15.1268 15.5875 15.283 15.2094 15.2205 14.8344L14.4486 10.2812L17.7049 7.05937C17.9736 6.79375 18.0705 6.39687 17.9518 6.0375C17.833 5.67812 17.5236 5.41563 17.1486 5.35938L12.658 4.69688L10.6486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip1_417_178)">
<path d="M32.6486 0.5625C32.483 0.21875 32.133 0 31.7486 0C31.3643 0 31.0174 0.21875 30.8486 0.5625L28.8393 4.69688L24.3518 5.35938C23.9768 5.41563 23.6643 5.67812 23.5486 6.0375C23.433 6.39687 23.5268 6.79375 23.7955 7.05937L27.0518 10.2812L26.283 14.8344C26.2205 15.2094 26.3768 15.5906 26.6861 15.8125C26.9955 16.0344 27.4049 16.0625 27.7424 15.8844L31.7518 13.7437L35.7611 15.8844C36.0986 16.0625 36.508 16.0375 36.8174 15.8125C37.1268 15.5875 37.283 15.2094 37.2205 14.8344L36.4486 10.2812L39.7049 7.05937C39.9736 6.79375 40.0705 6.39687 39.9518 6.0375C39.833 5.67812 39.5236 5.41563 39.1486 5.35938L34.658 4.69688L32.6486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip2_417_178)">
<path d="M54.6486 0.5625C54.483 0.21875 54.133 0 53.7486 0C53.3643 0 53.0174 0.21875 52.8486 0.5625L50.8393 4.69688L46.3518 5.35938C45.9768 5.41563 45.6643 5.67812 45.5486 6.0375C45.433 6.39687 45.5268 6.79375 45.7955 7.05937L49.0518 10.2812L48.283 14.8344C48.2205 15.2094 48.3768 15.5906 48.6861 15.8125C48.9955 16.0344 49.4049 16.0625 49.7424 15.8844L53.7518 13.7437L57.7611 15.8844C58.0986 16.0625 58.508 16.0375 58.8174 15.8125C59.1268 15.5875 59.283 15.2094 59.2205 14.8344L58.4486 10.2812L61.7049 7.05937C61.9736 6.79375 62.0705 6.39687 61.9518 6.0375C61.833 5.67812 61.5236 5.41563 61.1486 5.35938L56.658 4.69688L54.6486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip3_417_178)">
<path d="M76.6486 0.5625C76.483 0.21875 76.133 0 75.7486 0C75.3643 0 75.0174 0.21875 74.8486 0.5625L72.8393 4.69688L68.3518 5.35938C67.9768 5.41563 67.6643 5.67812 67.5486 6.0375C67.433 6.39687 67.5268 6.79375 67.7955 7.05937L71.0518 10.2812L70.283 14.8344C70.2205 15.2094 70.3768 15.5906 70.6861 15.8125C70.9955 16.0344 71.4049 16.0625 71.7424 15.8844L75.7518 13.7437L79.7611 15.8844C80.0986 16.0625 80.508 16.0375 80.8174 15.8125C81.1268 15.5875 81.283 15.2094 81.2205 14.8344L80.4486 10.2812L83.7049 7.05937C83.9736 6.79375 84.0705 6.39687 83.9518 6.0375C83.833 5.67812 83.5236 5.41563 83.1486 5.35938L78.658 4.69688L76.6486 0.5625Z" fill="#F4CE14"/>
</g>
<path d="M97.4969 0C97.7844 0 98.0469 0.164062 98.1719 0.4225L100.316 4.8375L105.106 5.54688C105.388 5.5875 105.619 5.78437 105.709 6.05312C105.797 6.325 105.725 6.62187 105.525 6.81875L102.05 10.2625L102.872 15.1219C102.919 15.4031 102.803 15.6906 102.569 15.8562C102.338 16.0219 102.003 16.0438 101.778 15.9094L97.4969 13.6219L93.1906 15.9094C92.9656 16.0438 92.6594 16.0219 92.425 15.8562C92.1938 15.6906 92.0781 15.4031 92.0969 15.1219L92.9438 10.2625L89.4722 6.81875C89.2703 6.62187 89.1988 6.325 89.2875 6.05312C89.3759 5.78437 89.6094 5.5875 89.8903 5.54688L94.6781 4.8375L96.8219 0.4225C96.95 0.164031 97.2094 0 97.4969 0ZM97.4969 2.46719L95.8563 5.85C95.7469 6.07187 95.5344 6.22812 95.2906 6.26562L91.5931 6.80937L94.2781 9.46875C94.45 9.64062 94.5281 9.8875 94.4875 10.1281L93.8563 13.8656L97.1438 12.1094C97.3656 11.9906 97.6313 11.9906 97.85 12.1094L101.138 13.8656L100.506 10.1281C100.466 9.8875 100.547 9.64062 100.719 9.46875L103.403 6.80937L99.7063 6.26562C99.4594 6.22812 99.2469 6.07187 99.1406 5.85L97.4969 2.46719Z" fill="#F4CE14"/>
<defs>
<clipPath id="clip0_417_178">
<rect width="18" height="16" fill="white" transform="translate(0.5)"/>
</clipPath>
<clipPath id="clip1_417_178">
<rect width="18" height="16" fill="white" transform="translate(22.5)"/>
</clipPath>
<clipPath id="clip2_417_178">
<rect width="18" height="16" fill="white" transform="translate(44.5)"/>
</clipPath>
<clipPath id="clip3_417_178">
<rect width="18" height="16" fill="white" transform="translate(66.5)"/>
</clipPath>
</defs>
                </svg>
                </div>
                <div className="testimonial-card__header">
                  <img className="testimonial-headshot" src="/images/emma.jpg" alt="Testimonial" />
                  <div>
                    <span className="testimonial-name">Emma</span>
                    <span className="testimonial-job-title">Software Engineer</span>
                  </div>
                </div>
                <p>
                I had the pleasure of dining at Little Lemon for the first time last night, and it was an absolute delight. The atmosphere is cozy and intimate, and the menu offers a great selection of unique dishes. I highly recommend the risotto with lemon and truffle oil.
                </p>
              </div>
              <div className="testimonial-card">
                <div>      
                <svg width="107" height="16" viewBox="0 0 107 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_417_178)">
<path d="M10.6486 0.5625C10.483 0.21875 10.133 0 9.74864 0C9.36426 0 9.01739 0.21875 8.84864 0.5625L6.83926 4.69688L2.35176 5.35938C1.97676 5.41563 1.66426 5.67812 1.54864 6.0375C1.43301 6.39687 1.52676 6.79375 1.79551 7.05937L5.05176 10.2812L4.28301 14.8344C4.22051 15.2094 4.37676 15.5906 4.68614 15.8125C4.99551 16.0344 5.40489 16.0625 5.74239 15.8844L9.75176 13.7437L13.7611 15.8844C14.0986 16.0625 14.508 16.0375 14.8174 15.8125C15.1268 15.5875 15.283 15.2094 15.2205 14.8344L14.4486 10.2812L17.7049 7.05937C17.9736 6.79375 18.0705 6.39687 17.9518 6.0375C17.833 5.67812 17.5236 5.41563 17.1486 5.35938L12.658 4.69688L10.6486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip1_417_178)">
<path d="M32.6486 0.5625C32.483 0.21875 32.133 0 31.7486 0C31.3643 0 31.0174 0.21875 30.8486 0.5625L28.8393 4.69688L24.3518 5.35938C23.9768 5.41563 23.6643 5.67812 23.5486 6.0375C23.433 6.39687 23.5268 6.79375 23.7955 7.05937L27.0518 10.2812L26.283 14.8344C26.2205 15.2094 26.3768 15.5906 26.6861 15.8125C26.9955 16.0344 27.4049 16.0625 27.7424 15.8844L31.7518 13.7437L35.7611 15.8844C36.0986 16.0625 36.508 16.0375 36.8174 15.8125C37.1268 15.5875 37.283 15.2094 37.2205 14.8344L36.4486 10.2812L39.7049 7.05937C39.9736 6.79375 40.0705 6.39687 39.9518 6.0375C39.833 5.67812 39.5236 5.41563 39.1486 5.35938L34.658 4.69688L32.6486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip2_417_178)">
<path d="M54.6486 0.5625C54.483 0.21875 54.133 0 53.7486 0C53.3643 0 53.0174 0.21875 52.8486 0.5625L50.8393 4.69688L46.3518 5.35938C45.9768 5.41563 45.6643 5.67812 45.5486 6.0375C45.433 6.39687 45.5268 6.79375 45.7955 7.05937L49.0518 10.2812L48.283 14.8344C48.2205 15.2094 48.3768 15.5906 48.6861 15.8125C48.9955 16.0344 49.4049 16.0625 49.7424 15.8844L53.7518 13.7437L57.7611 15.8844C58.0986 16.0625 58.508 16.0375 58.8174 15.8125C59.1268 15.5875 59.283 15.2094 59.2205 14.8344L58.4486 10.2812L61.7049 7.05937C61.9736 6.79375 62.0705 6.39687 61.9518 6.0375C61.833 5.67812 61.5236 5.41563 61.1486 5.35938L56.658 4.69688L54.6486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip3_417_178)">
<path d="M76.6486 0.5625C76.483 0.21875 76.133 0 75.7486 0C75.3643 0 75.0174 0.21875 74.8486 0.5625L72.8393 4.69688L68.3518 5.35938C67.9768 5.41563 67.6643 5.67812 67.5486 6.0375C67.433 6.39687 67.5268 6.79375 67.7955 7.05937L71.0518 10.2812L70.283 14.8344C70.2205 15.2094 70.3768 15.5906 70.6861 15.8125C70.9955 16.0344 71.4049 16.0625 71.7424 15.8844L75.7518 13.7437L79.7611 15.8844C80.0986 16.0625 80.508 16.0375 80.8174 15.8125C81.1268 15.5875 81.283 15.2094 81.2205 14.8344L80.4486 10.2812L83.7049 7.05937C83.9736 6.79375 84.0705 6.39687 83.9518 6.0375C83.833 5.67812 83.5236 5.41563 83.1486 5.35938L78.658 4.69688L76.6486 0.5625Z" fill="#F4CE14"/>
</g>
<path d="M97.4969 0C97.7844 0 98.0469 0.164062 98.1719 0.4225L100.316 4.8375L105.106 5.54688C105.388 5.5875 105.619 5.78437 105.709 6.05312C105.797 6.325 105.725 6.62187 105.525 6.81875L102.05 10.2625L102.872 15.1219C102.919 15.4031 102.803 15.6906 102.569 15.8562C102.338 16.0219 102.003 16.0438 101.778 15.9094L97.4969 13.6219L93.1906 15.9094C92.9656 16.0438 92.6594 16.0219 92.425 15.8562C92.1938 15.6906 92.0781 15.4031 92.0969 15.1219L92.9438 10.2625L89.4722 6.81875C89.2703 6.62187 89.1988 6.325 89.2875 6.05312C89.3759 5.78437 89.6094 5.5875 89.8903 5.54688L94.6781 4.8375L96.8219 0.4225C96.95 0.164031 97.2094 0 97.4969 0ZM97.4969 2.46719L95.8563 5.85C95.7469 6.07187 95.5344 6.22812 95.2906 6.26562L91.5931 6.80937L94.2781 9.46875C94.45 9.64062 94.5281 9.8875 94.4875 10.1281L93.8563 13.8656L97.1438 12.1094C97.3656 11.9906 97.6313 11.9906 97.85 12.1094L101.138 13.8656L100.506 10.1281C100.466 9.8875 100.547 9.64062 100.719 9.46875L103.403 6.80937L99.7063 6.26562C99.4594 6.22812 99.2469 6.07187 99.1406 5.85L97.4969 2.46719Z" fill="#F4CE14"/>
<defs>
<clipPath id="clip0_417_178">
<rect width="18" height="16" fill="white" transform="translate(0.5)"/>
</clipPath>
<clipPath id="clip1_417_178">
<rect width="18" height="16" fill="white" transform="translate(22.5)"/>
</clipPath>
<clipPath id="clip2_417_178">
<rect width="18" height="16" fill="white" transform="translate(44.5)"/>
</clipPath>
<clipPath id="clip3_417_178">
<rect width="18" height="16" fill="white" transform="translate(66.5)"/>
</clipPath>
</defs>
                </svg>
                </div>
                <div className="testimonial-card__header">
                  <img className="testimonial-headshot" src="/images/john.jpg" alt="Testimonial" />
                  <div>
                    <span className="testimonial-name">John M.</span>
                    <span className="testimonial-job-title">Sales Manager</span>
                  </div>
                </div>
                <p>
                If you're looking for a restaurant with a bright and refreshing atmosphere, Little Lemon is the perfect choice. The menu is focused on fresh ingredients and bold flavors, and I was particularly impressed with their lemon tart for dessert. A must try!
                </p>
              </div>
              <div className="testimonial-card">
                <div>
                <svg width="106" height="16" viewBox="0 0 106 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_398_253)">
<path d="M10.1486 0.5625C9.98301 0.21875 9.63301 0 9.24864 0C8.86426 0 8.51739 0.21875 8.34864 0.5625L6.33926 4.69688L1.85176 5.35938C1.47676 5.41563 1.16426 5.67812 1.04864 6.0375C0.933014 6.39687 1.02676 6.79375 1.29551 7.05937L4.55176 10.2812L3.78301 14.8344C3.72051 15.2094 3.87676 15.5906 4.18614 15.8125C4.49551 16.0344 4.90489 16.0625 5.24239 15.8844L9.25176 13.7437L13.2611 15.8844C13.5986 16.0625 14.008 16.0375 14.3174 15.8125C14.6268 15.5875 14.783 15.2094 14.7205 14.8344L13.9486 10.2812L17.2049 7.05937C17.4736 6.79375 17.5705 6.39687 17.4518 6.0375C17.333 5.67812 17.0236 5.41563 16.6486 5.35938L12.158 4.69688L10.1486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip1_398_253)">
<path d="M32.1486 0.5625C31.983 0.21875 31.633 0 31.2486 0C30.8643 0 30.5174 0.21875 30.3486 0.5625L28.3393 4.69688L23.8518 5.35938C23.4768 5.41563 23.1643 5.67812 23.0486 6.0375C22.933 6.39687 23.0268 6.79375 23.2955 7.05937L26.5518 10.2812L25.783 14.8344C25.7205 15.2094 25.8768 15.5906 26.1861 15.8125C26.4955 16.0344 26.9049 16.0625 27.2424 15.8844L31.2518 13.7437L35.2611 15.8844C35.5986 16.0625 36.008 16.0375 36.3174 15.8125C36.6268 15.5875 36.783 15.2094 36.7205 14.8344L35.9486 10.2812L39.2049 7.05937C39.4736 6.79375 39.5705 6.39687 39.4518 6.0375C39.333 5.67812 39.0236 5.41563 38.6486 5.35938L34.158 4.69688L32.1486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip2_398_253)">
<path d="M54.1486 0.5625C53.983 0.21875 53.633 0 53.2486 0C52.8643 0 52.5174 0.21875 52.3486 0.5625L50.3393 4.69688L45.8518 5.35938C45.4768 5.41563 45.1643 5.67812 45.0486 6.0375C44.933 6.39687 45.0268 6.79375 45.2955 7.05937L48.5518 10.2812L47.783 14.8344C47.7205 15.2094 47.8768 15.5906 48.1861 15.8125C48.4955 16.0344 48.9049 16.0625 49.2424 15.8844L53.2518 13.7437L57.2611 15.8844C57.5986 16.0625 58.008 16.0375 58.3174 15.8125C58.6268 15.5875 58.783 15.2094 58.7205 14.8344L57.9486 10.2812L61.2049 7.05937C61.4736 6.79375 61.5705 6.39687 61.4518 6.0375C61.333 5.67812 61.0236 5.41563 60.6486 5.35938L56.158 4.69688L54.1486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip3_398_253)">
<path d="M76.1486 0.5625C75.983 0.21875 75.633 0 75.2486 0C74.8643 0 74.5174 0.21875 74.3486 0.5625L72.3393 4.69688L67.8518 5.35938C67.4768 5.41563 67.1643 5.67812 67.0486 6.0375C66.933 6.39687 67.0268 6.79375 67.2955 7.05937L70.5518 10.2812L69.783 14.8344C69.7205 15.2094 69.8768 15.5906 70.1861 15.8125C70.4955 16.0344 70.9049 16.0625 71.2424 15.8844L75.2518 13.7437L79.2611 15.8844C79.5986 16.0625 80.008 16.0375 80.3174 15.8125C80.6268 15.5875 80.783 15.2094 80.7205 14.8344L79.9486 10.2812L83.2049 7.05937C83.4736 6.79375 83.5705 6.39687 83.4518 6.0375C83.333 5.67812 83.0236 5.41563 82.6486 5.35938L78.158 4.69688L76.1486 0.5625Z" fill="#F4CE14"/>
</g>
<g clip-path="url(#clip4_398_253)">
<path d="M98.1486 0.5625C97.983 0.21875 97.633 0 97.2486 0C96.8643 0 96.5174 0.21875 96.3486 0.5625L94.3393 4.69688L89.8518 5.35938C89.4768 5.41563 89.1643 5.67812 89.0486 6.0375C88.933 6.39687 89.0268 6.79375 89.2955 7.05937L92.5518 10.2812L91.783 14.8344C91.7205 15.2094 91.8768 15.5906 92.1861 15.8125C92.4955 16.0344 92.9049 16.0625 93.2424 15.8844L97.2518 13.7437L101.261 15.8844C101.599 16.0625 102.008 16.0375 102.317 15.8125C102.627 15.5875 102.783 15.2094 102.721 14.8344L101.949 10.2812L105.205 7.05937C105.474 6.79375 105.571 6.39687 105.452 6.0375C105.333 5.67812 105.024 5.41563 104.649 5.35938L100.158 4.69688L98.1486 0.5625Z" fill="#F4CE14"/>
</g>
<defs>
<clipPath id="clip0_398_253">
<rect width="18" height="16" fill="white"/>
</clipPath>
<clipPath id="clip1_398_253">
<rect width="18" height="16" fill="white" transform="translate(22)"/>
</clipPath>
<clipPath id="clip2_398_253">
<rect width="18" height="16" fill="white" transform="translate(44)"/>
</clipPath>
<clipPath id="clip3_398_253">
<rect width="18" height="16" fill="white" transform="translate(66)"/>
</clipPath>
<clipPath id="clip4_398_253">
<rect width="18" height="16" fill="white" transform="translate(88)"/>
</clipPath>
</defs>
                </svg>
                </div>
                <div className="testimonial-card__header">
                  <img className="testimonial-headshot" src="/images/sophia.jpg" alt="Testimonial" />
                  <div>
                    <span className="testimonial-name">Sophia R.</span>
                    <span className="testimonial-job-title">Marketing Manager</span>
                  </div>
                </div>
                <p>
                Little Lemon exceeded all of my expectations. The service was excellent, and the food was absolutely amazing. I especially enjoyed the lemon spaghetti, it was cooked to perfection and had a great balance of acidity and flavor. I will definitely be returning.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="container">
            <div>
              <h2 className="section-header">About</h2>
              <p>
              Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. Adrian and Mario, the owners, have created a warm and welcoming atmosphere that makes you feel like you're dining in the Mediterranean. The menu features a variety of delicious dishes that are made with fresh, high-quality ingredients and traditional Mediterranean recipes.
              </p>
              <p>The atmosphere is cozy, and the decor features warm tones and colorful mosaics that transport you to the Mediterranean. The restaurant's signature dish is a delicious lemon chicken, marinated in a tangy lemon and herb marinade, grilled to perfection and served over a bed of fluffy couscous.</p>
              <p>Adrian and Mario take pride in their food and service, and they make sure that every customer has a memorable dining experience. So if you're looking for a taste of the Mediterranean in Chicago, Little Lemon is the place to go!</p>
            </div>
            <div className="img-composition">
              <img className="about-section-img" src="/images/about-img-b.jpg" alt="Owner 1"/>
              <img className="about-section-img" src="/images/about-img-a.jpg" alt="Owner 2"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
