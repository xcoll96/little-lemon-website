import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const ConfirmedBooking = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("little-lemon-reservation-data"));
    if (localData) {
      setFormData(localData);
    }
  }, []);

  console.log(formData);

  return (
    <>
      <Header />
      <main>
        <div className="container confirmation-page">
          <div>
            <svg
            className="confirmation-icon"
              width="48"
              height="48"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41003 8.59L8 12.17L15.59 4.57999L17 6L8 15Z"
                fill="#48742C"
              />
            </svg>

            <h2>Your reservation at Little Lemon has been confirmed</h2>
            <ul className="confirmation-details">
              <li>
                <span>First Name:</span>
                <span>{formData.firstName}</span>
              </li>
              <li>
                <span>Last Name:</span>
                <span>{formData.lastName}</span>
              </li>
              <li>
                <span>Email:</span>
                <span>{formData.email}</span>
              </li>
              <li>
                <span>Reservation Date</span>
                <span>{formData.reservationDate}</span>
              </li>
              <li>
                <span>Reservation Time</span>
                <span>{formData.reservationTime}</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="confirmation-img"
              src="/images/restaurant-tables.jpg"
              alt="Little Lemon restaurant"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
