import React from "react";
import './search.css'

function Search(props) {
  return (
    <form className="form-group">
      <div>
        <input className="form-control" type="text" value={props.val} placeholder="Harry Potter" name="val" onChange={props.handleInputChange}/>
      </div>
      <div className="pull-right">
        <button onClick={props.submitForm} type="submit" className="btn saveIt btn-lg btn-danger float-right">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
