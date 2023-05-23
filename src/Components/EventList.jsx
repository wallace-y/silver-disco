import { useState } from "react";
import EventCard from "./EventCard";
import EventSearch from "./EventSearch";

function EventList() {
  const [search, setSearch] = useState("London");

  console.log(search);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container text-center">
        <h1>Events near you...</h1>
        <EventSearch setSearch={setSearch} />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}

export default EventList;
