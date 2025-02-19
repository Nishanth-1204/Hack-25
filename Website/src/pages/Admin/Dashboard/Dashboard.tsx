import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Dashboard: React.FC = () => {
  // Dummy user data and PDF URL
  const [userData, setUserData] = useState<any>(null); // Will hold user info like name, number, etc.
  const [pdfUrl, setPdfUrl] = useState<string>(""); // Will hold PDF URL

  // Simulating fetching data from the backend by using dummy data
  useEffect(() => {
    const fetchData = () => {
      const dummyData = {
        name: "John Doe",
        number: "123-456-7890",
        pdfUrl: "https://www.w3.org/WAI/WCAG21/quickref/WCAG-Quickref-2020.pdf", // Example PDF URL
      };

      // Set dummy data to state
      setUserData(dummyData);
      setPdfUrl(dummyData.pdfUrl);
    };

    fetchData(); // Simulating data fetch
  }, []); // Empty dependency array means it will run once when the component mounts

  if (!userData) {
    return <div>Loading...</div>; // Show loading while data is being fetched
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="user-info">
        <h2>User Information</h2>
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Number:</strong> {userData.number}
        </p>
      </div>

      <div className="pdf-viewer">
        <h2>PDF Document</h2>
        {pdfUrl ? (
          <div>
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@2.11.338/es5/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl={pdfUrl} />
            </Worker>
          </div>
        ) : (
          <p>No PDF available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
