import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container box">
      <div class="row align-items-center">
      <div class="col-lg-12">
            <h1 class="font-weight-light">Let's Get <b>Back to Work</b></h1>
            <p>
            Avanade is committed to making your return to office a safe experience. We are thrilled to announce our Back to Work program which has all the resources, help and guidance you need to get back to your office. 
            </p>
          </div>
      </div>
        <div class="row align-items-center">
          <div class="col-lg-12">
            <img class ="group"
              src={require("./group.png")}
              alt="group"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;