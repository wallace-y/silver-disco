import { useRef } from "react";

function EventSearch({ setSearch }) {
  const searchRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(searchRef.current.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      type="submit"
      className="row g-3 align-items-center justify-content-center mb-3"
    >
      <div className="col-auto">
        <label htmlFor="search" className="form-label">
          Search events here:
        </label>
      </div>
      <div className="col-auto">
        <input
          ref={searchRef}
          className="form-control"
          id="search"
          name="search"
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
