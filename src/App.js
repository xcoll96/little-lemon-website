import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import BookingPage from "./pages/BookingPage"
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/reservations" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmedBooking/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
