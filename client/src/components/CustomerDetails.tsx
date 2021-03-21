import React from "react";
import { useParams } from "react-router-dom";

function CustomerDetails() {
  const id = useParams();
  console.log("id", id);
  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3 mt-3 " style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">{/* <img src="..." alt="..." /> */}</div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Customer Information</h5>
              <div className="card-text" style={{ minWidth: "470px" }}>
                <div className="row">Name: Ganesh Harihar</div>
                <div className="row">Occupation : Employed</div>
                <div className="row">DOB : 14th April 1998</div>
                <div className="row">Status : Active</div>
                <div className="row">Bio : Software Engineer</div>
              </div>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
