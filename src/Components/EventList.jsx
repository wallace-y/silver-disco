import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import EventSearch from "./EventSearch";

function EventList() {
  const [search, setSearch] = useState("London");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // To do - updated the URL to filter by location
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=987AklLVrCLAYuy5OuJmG9V6Z8qzG3MU"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setEvents(res._embedded.events);
        console.log(res._embedded.events);
      });
  }, [search]);
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container text-center">
        <h1>Events near {search}</h1>
        <EventSearch setSearch={setSearch} />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {events.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default EventList;
