function SearchResult() {
  return (
      <div className="card">
        <div className="card-header">
          <p className="card-header-title title is-4">Book Title</p>
        </div>
        <div className="card-content">
          <div className="media-content">
            <div className="columns">
              <div className="column is-four-fifths">
                <p className="mb-3">Written by:</p>
              </div>
              <div className="column">
                <div className="field is-grouped is-flex is-justify-content-flex-end">
                  <div className="control">
                    <a className="button is-info">View Info</a>
                  </div>
                  <div className="control">
                    <a className="button is-info">Save</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="columns is-gapless">
              <div className="column is-one-fifth">
                <div className="media">
                  <div className="media-left">
                    <figure className="image">
                      <img
                        src="https://placekitten.com/200/300"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <p>description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SearchResult;
