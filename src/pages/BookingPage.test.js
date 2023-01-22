import { initialTimes, updateTimes } from "./BookingPage";

test("returns correct value", () => {
  expect(initialTimes()).toEqual([
    { timeSlot: "6:00 PM", available: true },
    { timeSlot: "7:00 PM", available: true },
    { timeSlot: "8:00 PM", available: true },
    { timeSlot: "9:00 PM", available: true },
    { timeSlot: "10:00 PM", available: true },
    { timeSlot: "11:00 PM", available: true },
  ]);
});

test("updates availability correctly", () => {
  const initialTimes = [
    { timeSlot: "6:00 PM", available: true },
    { timeSlot: "7:00 PM", available: true },
    { timeSlot: "8:00 PM", available: true },
    { timeSlot: "9:00 PM", available: true },
    { timeSlot: "10:00 PM", available: true },
    { timeSlot: "11:00 PM", available: true },
  ];

  const reservationTime = "7:00 PM";
  const expected = [
    { timeSlot: "6:00 PM", available: true },
    { timeSlot: "7:00 PM", available: false },
    { timeSlot: "8:00 PM", available: true },
    { timeSlot: "9:00 PM", available: true },
    { timeSlot: "10:00 PM", available: true },
    { timeSlot: "11:00 PM", available: true },
  ];

  expect(updateTimes(initialTimes, reservationTime)).toEqual(expected);
});
