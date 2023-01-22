import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import BookingSlot from "../components/BookingSlot";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const initialTimes = () => {
  return [
    { timeSlot: "6:00 PM", available: true },
    { timeSlot: "7:00 PM", available: true },
    { timeSlot: "8:00 PM", available: true },
    { timeSlot: "9:00 PM", available: true },
    { timeSlot: "10:00 PM", available: true },
    { timeSlot: "11:00 PM", available: true },
  ];
};

export const updateTimes = (availableTimes, reservationTime) => {
  const updatedTimes = availableTimes.map((time) => {
    if (time.timeSlot === reservationTime) {
      return { timeSlot: time.timeSlot, available: false };
    }
    return time;
  });
  return updatedTimes;
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes());

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
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
