import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReservationList from "./routes/ReservationList";

import './App.css';
import Reservation from "./routes/Reservation";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <hr />
      <Routes>
        <Route path="/" element={<ReservationList></ReservationList>}></Route>
        <Route
          path="reservations"
          element={<ReservationList></ReservationList>}
        ></Route>
        <Route
          path="reservation"
          element={<Reservation></Reservation>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
