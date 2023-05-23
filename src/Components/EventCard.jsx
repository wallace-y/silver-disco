function EventCard(props) {
  const event = props.event;
  const name = event.name;
  const imgUrl = event.images[2].url;
  const linkUrl = event.url;
  const startDate = event.dates.start.localDate;
  let min;
  let max;
  if (event.priceRanges) {
    min = event.priceRanges[0].min;
    max = event.priceRanges[0].max;
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <div
        className="card shadow rounded"
        style={{ width: "18rem", height: "30rem" }}
      >
        <img
          src={imgUrl}
          className="card-img-top"
          alt={`${name}-cover-image`}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Min: £{min || "Unknown"}</p>
          <p>Max: £{max || "Unknown"}</p>
          <p className="card-text">{startDate}</p>
          <a href={linkUrl} className="btn btn-dark">
            Buy tickets
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
