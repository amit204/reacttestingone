import React from 'react';
import './PageNotFound.css';

class PageNotFound extends React.Component {
  render() {
    return(
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-12">
            <h1>Page Not Found Page</h1>

            <hr />

            <p>The page you are trying, not found</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PageNotFound;
