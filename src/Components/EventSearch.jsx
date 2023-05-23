function EventSearch() {
  return (
    <form
      type="submit"
      className="row g-3 align-items-center justify-content-center mb-3"
    >
      <div className="col-auto">
        <label for="search" class="form-label">
          Search events here:
        </label>
      </div>
      <div className="col-auto">
        <input
          class="form-control"
          id="search"
          placeholder="Type to search..."
        ></input>
      </div>
      <div className="col-auto">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
}

export default EventSearch;
