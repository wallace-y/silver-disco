import EventCard from "./EventCard";
import EventSearch from "./EventSearch";

function EventList() {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container text-center">
        <h1>Events near you...</h1>
        <EventSearch />
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
