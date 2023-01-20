import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import BookingSlot from '../components/BookingSlot';


const initialTimes = () => {
  return [{timeSlot: '6:00 PM', available: true}, {timeSlot: '7:00 PM', available: true},{timeSlot: '8:00 PM', available: true},{timeSlot: '9:00 PM', available: true},{timeSlot: '10:00 PM', available: true},{timeSlot: '11:00 PM', available: true}];
}

const updateTimes = (availableTimes, reservationTime) => {
  const updatedTimes = availableTimes.map(time => {
    if(time.timeSlot === reservationTime) {
      return {timeSlot: time.timeSlot, available:false}
    }
    return time;
  });
  console.log("Updating list");
  return updatedTimes;
}


const BookingPage = () => {
  
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes());

  return (
    <div>
      <h2>Available Time Slots</h2>
      <ul className='time-slots-wrapper'>
        {availableTimes.map(time => {
        return(<BookingSlot key={time.timeSlot} time={time.timeSlot} availability={time.available}/>
      )})}
      </ul>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
}

export default BookingPage;



/*

1.Define available dates
2. user choose a date from the available dates

*/