import { render, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the Reserve button", () => {
  const { getByText } = render(
    <BookingForm availableTimes={[]} dispatch={jest.fn()} />
  );
  const bookNowText = getByText("Reserve");
  expect(bookNowText).toBeInTheDocument();
});

test("Booking form can be submitted by the user", () => {
    const dispatch = jest.fn();
    const { getByTestId } = render(
      <BookingForm
        availableTimes={[
          { timeSlot: "6:00 PM", available: true },
          { timeSlot: "7:00 PM", available: true },
          { timeSlot: "8:00 PM", available: true },
          { timeSlot: "9:00 PM", available: true },
          { timeSlot: "10:00 PM", available: true },
          { timeSlot: "11:00 PM", available: true }
        ]}
        dispatch={dispatch}
      />
    );
    
  const form = getByTestId("booking-form");
  const firstName = getByTestId("first-name");
  const lastName = getByTestId("last-name");
  const email = getByTestId("email");
  const date = getByTestId("date");
  const reservationTime = getByTestId("reservation-time");
  const guests = getByTestId("guests");

  fireEvent.change(firstName, { target: { value: "Louis" } });
  fireEvent.change(lastName, { target: { value: "Smith" } });
  fireEvent.change(email, { target: { value: "louissmith@gmail.com" } });
  fireEvent.change(date, { target: { value: "13/10/2023" } });
  fireEvent.change(reservationTime, { target: { value: "7:00 PM" } });
  fireEvent.change(guests, { target: { value: 8 } });

  fireEvent.submit(form);

  expect(dispatch).toHaveBeenCalledWith("7:00 PM");
});
