function SavedBook(props) {
    return (
      <div className="card">
        <div className="card-header">
          <p className="card-header-title title is-4">{props.book.title}</p>
        </div>
        <div className="card-content">
          <div className="media-content">
            <div className="columns">
              <div className="column is-four-fifths">
                <p className="mb-3">Written by:{props.book.authors}</p>
              </div>
              <div className="column">
                <div className="field is-grouped is-flex is-justify-content-flex-end">
                  <div className="control">
                    <a className="button is-info" target="_blank" href={props.book.link}>View Info</a>
                  </div>
                  <div className="control">
                    <a className="button is-info">Delete</a>
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
                        src={props.book.image}
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <p>{props.book.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SavedBook;