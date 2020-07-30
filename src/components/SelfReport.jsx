import React from "react";

function SelfReport() {
  return (
    <div className="selfreport">
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
            <h1 class="font-weight-light">Self Report</h1>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdB178TUiMfVZECdzGBsWWwwt-ZKK4oQO1NHU8ysCKReTOLJA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfReport;