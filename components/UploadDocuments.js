import React, { useState } from "react";

const UploadDocuments = () => {
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState([]);

  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);

    // Validate number of files
    if (uploadedFiles.length + files.length > 6) {
      alert("You can upload a maximum of 6 files.");
      return;
    }

    // Validate file format
    const validFiles = uploadedFiles.filter((file) => file.type === "application/pdf");
    const invalidFiles = uploadedFiles.filter((file) => file.type !== "application/pdf");

    // Update state with valid files
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);

    // Update upload status
    const newStatus = [
      ...validFiles.map((file) => ({ name: file.name, status: "success" })),
      ...invalidFiles.map((file) => ({ name: file.name, status: "failure" })),
    ];
    setUploadStatus((prevStatus) => [...prevStatus, ...newStatus]);

    // Alert for invalid files
    if (invalidFiles.length > 0) {
      alert("Only PDF files are allowed. Some files were not uploaded.");
    }
  };

  return (
    <div style={{ }}>
      {/* Header with Badge and Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "gray",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        >
          3
        </div>
        <h2 
        style={{ 
          backgroundColor: "#6a1b9a",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          margin: 0,
          flex: 1,
          textAlign : "left",

          }}
          
        >
         Upload Documents
        </h2>
      </div>

      {/* Layout for Upload and Information */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Upload Section */}
        <div
          style={{
            flex: "1",
            border: "2px dashed #ccc",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
          }}
        >
          <input
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              color: "#555",
            }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/50/000000/file--v1.png"
              alt="upload-icon"
              style={{ width: "40px", height: "40px" }}
            />
            <p>Click to upload or drag and drop Bank Statements</p>
          </label>
        </div>

        {/* Information Section */}
        <div style={{ flex: "2" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", lineHeight: "1.8", color: "#333" }}>
            <li>
              PDFs (not scanned copies) of company's operating bank current account(s)
              statements for the past 6 months.
            </li>
            <li>
              Example: If today is 29 Nov 24, then please upload bank statements from May
              24 to Oct 24 (both months inclusive).
            </li>
            <li>
              If your company is multi-banked, then please upload 6 months bank
              statements for each bank account.
            </li>
            <li>
              If your file is password protected, we request you to remove the password
              and upload the file to avoid submission failure.
            </li>
            <li>
              In case you are facing any issue while uploading bank statements, please
              contact us on <a href="mailto:support@credilinq.ai">support@credilinq.ai</a>.
            </li>
          </ul>
        </div>
      </div>

      {/* Uploaded File Status */}
      <div style={{ marginTop: "20px" }}>
        {uploadStatus.map((file, index) => (
          <div
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: file.status === "success" ? "#d4edda" : "#f8d7da",
              color: file.status === "success" ? "#155724" : "#721c24",
              border: file.status === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
            }}
          >
            {file.name} - {file.status === "success" ? "Upload Successful" : "Upload Failed"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadDocuments;
