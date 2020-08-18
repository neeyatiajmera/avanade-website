import React from "react";

function Dashboard() {
  return (
    <div className="dashboard">
      <div class="container box2">
      <div class="row align-items-center">
      <div class="col-lg-12">
            <h1 class="font-weight-light">Dashboard</h1>
            <iframe title = 'dashboard' src="https://app.powerbi.com/reportEmbed?reportId=f0dac6b4-d7cc-4f6c-9cc9-0c0ede2a23f4&groupId=9606f938-1f8a-4601-bd8e-660039edae4e&autoAuth=true&ctid=cf36141c-ddd7-45a7-b073-111f66d0b30c&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" width = "950" height = "800">Loading...</iframe>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;