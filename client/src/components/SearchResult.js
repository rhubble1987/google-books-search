import API from "../utils/API";
import React, {useState} from "react";

function SearchResult(props) {
  const [buttonState, setButtonState] = useState("button is-info");
  const [savedSymbolState, setSavedSymbolState] = useState("is-hidden");

  const handleBookSaving = props => {
    API.saveBook(props)
    .then(res => {
      setButtonState("button is-info is-hidden");
      setSavedSymbolState("");
      console.log(res); 
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
      <div className="card">
        <div className="card-header">
          <p className="card-header-title title is-4">{props.searchResult.volumeInfo.title}</p>
        </div>
        <div className="card-content">
          <div className="media-content">
            <div className="columns">
              <div className="column is-four-fifths">
                <p className="mb-3">Written by:{props.searchResult.volumeInfo.authors}</p>
              </div>
              <div className="column">
                <div className="field is-grouped is-flex is-justify-content-flex-end">
                  <div className="control">
                    <a className="button is-info" target="_blank" href={props.searchResult.volumeInfo.previewLink}>View Info</a>
                  </div>
                  <div className="control">
                    <a className={buttonState} onClick={() => handleBookSaving(props.searchResult)}>Save</a>
                  </div>
                  <p className={savedSymbolState}>Saved</p>
                </div>
              </div>
            </div>

            <div className="columns is-gapless">
              <div className="column is-one-fifth">
                <div className="media">
                  <div className="media-left">
                    <figure className="image">
                      <img
                        src={props.searchResult.volumeInfo.imageLinks.thumbnail}
                        alt="Book's cover"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <p>{props.searchResult.volumeInfo.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SearchResult;
