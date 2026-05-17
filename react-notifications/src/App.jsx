import React from "react";
import AlertComponent from "./components/AlertComponent";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload Notification</h1>

      <AlertComponent
        title="Successful Alert!"
        type="success"
        message="The system has successfully uploaded your file."
      >
        <strong>Thank you for using our system.</strong>  
        <br />  
        <button>Close</button>
      </AlertComponent>

      <AlertComponent
        title="Warning Alert!"
        type="warning"
        message="The upload was not completed. Please verify your file and retry."
      >
        <button>Retry</button>
      </AlertComponent>

      <AlertComponent
        title="Error Alert!"
        type="error"
      >
        <p>The file upload failed. Please try again.</p>
        <button>Okay</button>
        </AlertComponent>
    </div>
  );
};

export default App;