import React from 'react'

const BookingSlot = ({time, availability}) => {

  return (
    <li className={`time-slot ${availability===true ? 'available' : 'unavailable'}`}>
        {time}
    </li>
  )
}

export default BookingSlot