import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reservationTime: "Please Select a time...",
    reservationDate: "",
    guests: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(formData.reservationTime);
    setSubmitted(true);
  };

  useEffect(() => {
    if(submitted){
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          reservationTime: "Please Select a time...",
          reservationDate: "",
          guests: null,
        });
        setSubmitted(false);
    }
  }, [submitted]);

  return (
    <form data-testid="booking-form" onSubmit={handleSubmit}>
      <div className="two-col-row">
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            data-testid="first-name"
            type="text"
            id="first-name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            data-testid="last-name"
            type="text"
            id="last-name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          data-testid="email"
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="two-col-row">
        <div>
          <label htmlFor="date">Reservation Date:</label>
          <input
            data-testid="date"
            type="date"
            id="date"
            value={formData.reservationDate}
            onChange={(e) =>
              setFormData({ ...formData, reservationDate: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="reservation-time">Reservation Time:</label>
          <select
            data-testid="reservation-time"
            id="reservation-time"
            onChange={(e) =>
              setFormData({ ...formData, reservationTime: e.target.value })
            }
          >
            <option>Please Select a time...</option>
            {availableTimes
              .filter((time) => time.available)
              .map((availableTime) => (
                <option key={availableTime.timeSlot}>
                  {availableTime.timeSlot}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="guests"> Number of guests</label>
        <input
          data-testid="guests"
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        />
      </div>
      <input
        data-testid="submit"
        className="primary-btn"
        type="submit"
        value="Reserve"
      />
    </form>
  );
};

export default BookingForm;
