import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import BookingSlot from "../components/BookingSlot";
import Header from "../components/Header";
import Footer from "../components/Footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return action.payload;

    case "UPDATE_TIMES":
      return action.payload;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(reducer, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reservationTime: "Please select a time...",
    reservationDate: "",
    guests: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const navigate = useNavigate();

  const initializeTimes = () => {
    const date = new Date();
    const fetchResult = fetchAPI(date); // eslint-disable-line no-undef
    const availableTimes = fetchResult.map((time) => {
      return { timeSlot: time, available: true };
    });

    dispatch({
      type: "INITIALIZE_TIMES",
      payload: availableTimes,
    });
  };

  const updatedTimes = (reservationDate) => {
    const date = new Date(reservationDate);
    const fetchResult = fetchAPI(date); // eslint-disable-line no-undef
    const availableTimes = fetchResult.map((time) => {
      return { timeSlot: time, available: true };
    });

    dispatch({
      type: "UPDATE_TIMES",
      payload: availableTimes,
    });
  };

  const handleChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
    console.log("form data: ", formData);
  };

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  };

  const handleBlur = (input, value) => {
    const errors = { ...formErrors };
    if (!value) {
      errors[input] = "This field is required";
    } else if (input === "email") {
      if (!validateEmail(value)) {
        errors[input] = "Invalid email format";
      } else {
        delete errors[input];
      }
    } else {
      delete errors[input];
    }

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formErrors).length === 0) {
      const submitAPIStatus = submitAPI(formData); // eslint-disable-line no-undef
      if (submitAPIStatus) {
        navigate("/confirmation");
      }
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.reservationTime !== "Please select a time..." &&
      formData.reservationDate &&
      formData.guests
    ) {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  }, [formErrors, formData]);


    useEffect(() => {
      localStorage.setItem('little-lemon-reservation-data', JSON.stringify(formData));
    }, [formData]);


  return (
    <>
      <Header />
      <section className="reservations-header">
        <div className="container">
          <h1>Reserve a table</h1>
        </div>
      </section>
      <main>
        <section>
          <div className="container">
            <div className="section-header is-centered">
              <h3>Available Time Slots</h3>
            </div>
            <ul className="time-slots-wrapper">
              {availableTimes.map((time) => {
                return (
                  <BookingSlot
                    key={time.timeSlot}
                    time={time.timeSlot}
                    availability={time.available}
                  />
                );
              })}
            </ul>
          </div>
          <BookingForm
            availableTimes={availableTimes}
            formData={formData}
            formErrors={formErrors}
            isSubmitEnabled={isSubmitEnabled}
            updatedTimes={updatedTimes}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
