import React from "react";

function CheckIn() {
  return (
    <div className="checkin">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">CheckIn</h1>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe8U6cCzKEry0pz8bpX3qjhRhHxYB9dqY6wIsvvH6QEJggykw/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;