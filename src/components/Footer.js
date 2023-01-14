const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <nav>
            <ul>
              <li>Doormat navigation</li>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/home">About</a>
              </li>
              <li>
                <a href="/home">Menu</a>
              </li>
              <li>
                <a href="/home">Reservations</a>
              </li>
              <li>
                <a href="/home">Order Online</a>
              </li>
              <li>
                <a href="/home">Log In</a>
              </li>
            </ul>
          </nav>
          <ul>
            <li>Contact</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
          <ul>
            <li>Social media links</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>

          <nav>
            <ul></ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
