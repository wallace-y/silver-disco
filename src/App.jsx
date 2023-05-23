import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import EventList from "./Components/EventList";

function App() {
  return (
    <div>
      <Header />
      <EventList />
      <Footer />
    </div>
  );
}

export default App;
