import React, { useState} from 'react';

const BookingForm = ({availableTimes, dispatch}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reservationTime: "Please Select a time...",
    reservationDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(formData.reservationTime);
    setFormData({
      ...formData,
      reservationTime: "Please Select a time..."
    });
  }

  console.log("List updated");

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='first-name'>
        First Name:
      </label>
        <input type="text" id="first-name" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
     
      <br />
      <label htmlFor='last-name'>
        Last Name:
      </label>
        <input type="text" id="last-name" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
   
      <br />
      <label htmlFor='email'>
        Email:
      </label>
        <input type="email" id="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
   
      <br />
      <label htmlFor="reservation-time">
        Reservation Time:
        </label>
        <select id="reservation-time" onChange={e => setFormData({...formData, reservationTime: e.target.value})}>
        <option>Please Select a time...</option>
          {availableTimes.filter(time => time.available).map(availableTime => <option key={availableTime.timeSlot}>{availableTime.timeSlot}</option>)}
        </select>

      <br />
      <label htmlFor="date">
        Reservation Date:
      </label>
        <input type="date" id="date" value={formData.reservationDate} onChange={e =>setFormData({...formData, reservationDate: e.target.value})} />
      <br />
      <label htmlFor="guests"> Number of guests</label>
   <input type="number" id="guests" placeholder="1" min="1" max="10"></input>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BookingForm;