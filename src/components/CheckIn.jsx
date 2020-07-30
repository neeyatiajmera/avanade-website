import React from "react";

function CheckIn() {
  return (
    <div className="checkin">
      <div class="container box2">
      <div class="row align-items-center">
      <div class="col-lg-12">
            <h1 class="font-weight-light">Check In</h1>
            <p>Let's get you back to office. Follow the steps below to return to office:</p>
      <ul>
        <li>Fill out the COVID-19 Check in Form</li>
      <li>Receive a confirmation email with a QR code</li>
      <li>Return to office and get the QR code scanned at the front desk</li>
      </ul>
      </div>
      </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe8U6cCzKEry0pz8bpX3qjhRhHxYB9dqY6wIsvvH6QEJggykw/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;