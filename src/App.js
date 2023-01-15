import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import BookingPage from "./pages/BookingPage"

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/reservations" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
