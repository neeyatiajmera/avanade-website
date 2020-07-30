import React from "react";

function SelfReport() {
  return (
    <div className="selfreport">
       <div class="container box2">
      <div class="row align-items-center">
      <div class="col-lg-12">
            <h1 class="font-weight-light">Self-Report</h1>
            <p>For the health and safety of all employees, we encourage you to report any changes in your health status. A personnel will reach out shortly to provide you with any resources, help or guidance you might need. </p>
 
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

export default SelfReport;