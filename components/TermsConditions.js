
// import React, { useState } from "react";
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const TermsAndConditions = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [error, setError] = useState("");
//   // const navigate = useNavigate(); // Initialize useNavigate


//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//     setError(""); // Clear error when checkbox is checked
//   };

//   const handleSubmit = () => {
//     if (!isChecked) {
//       setError("You must agree to the Terms and Conditions before submitting.");
//     } else {
//       // navigate('/submitted-entities.js');
//       alert('submitted');
//     }
//   }; 

//   return (
//     <div style={{ }}>
//       {/* Header */}
//       <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
//         <div
//           style={{
//             width: "30px",
//             height: "30px",
//             borderRadius: "50%",
//             backgroundColor: "gray",
//             color: "white",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontWeight: "bold",
//           }}
//         >
//           4
//         </div>
//         <h2
//           style={{
//             backgroundColor: "#6a1b9a",
//             color: "white",
//             padding: "10px 20px",
//             borderRadius: "8px",
//             margin: 0,
//             flex: 1,
//             textAlign: "left",
//           }}
//         >
//           Terms & Conditions
//         </h2>
//       </div>

//       {/* Terms Section */}
//       <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
//         <label style={{ display: "block", marginBottom: "10px", color: "#555" ,textAlign: "left",}}>
//           <input
//             type="checkbox"
//             checked={isChecked}
//             onChange={handleCheckboxChange}
//             style={{ marginRight: "10px" }}
            
//           />
//           By ticking, you are confirming that you have understood and are agreeing to the details mentioned:
//         </label>
//         <ul style={{ listStyleType: "none", paddingLeft: "0", lineHeight: "1.8", color: "#333", textAlign: "left", }}>
//           <li>✔ I confirm that I am the authorized person to upload bank statements on behalf of my company.</li>
//           <li>✔ I assure you that uploaded bank statements and company information match; otherwise, no report will be generated.</li>
//           <li>
//             ✔ I understand that this is a general report, and Credilinq is not providing a solution or guidance for business growth.
//           </li>
//           <li>✔ I have read and understood the{" "}
//             <a href="/terms-and-conditions" target="_blank" style={{ color: "#6a1b9a", textDecoration: "none" }}>
//               Terms & Conditions
//             </a>.
//           </li>
//         </ul>
//         {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
//       </div>

//       {/* Submit Button */}
//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={handleSubmit}
//           style={{
//             padding: "10px 20px",
//             backgroundColor: isChecked ? "#6a1b9a" : "#ccc",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: isChecked ? "pointer" : "not-allowed",
//           }}
//           disabled={!isChecked}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;

import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  // const navigate = useNavigate(); // Initialize useNavigate


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setError(""); // Clear error when checkbox is checked
  };

  const handleSubmit = () => {
    if (isChecked) {
      // Redirect to Submitentities.js
      window.location.href = '/submitentities'; // Adjust the path as needed
    } else {
      alert('Please accept the terms and conditions before proceeding.');
    }
  };


  return (
    <div style={{ }}>
      {/* Header */}
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
          }}
        >
          4
        </div>
        <h2
          style={{
            backgroundColor: "#6a1b9a",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            margin: 0,
            flex: 1,
            textAlign: "left",
          }}
        >
          Terms & Conditions
        </h2>
      </div>

      {/* Terms Section */}
      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
        <label style={{ display: "block", marginBottom: "10px", color: "#555" ,textAlign: "left",}}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            style={{ marginRight: "10px" }}
            
          />
          By ticking, you are confirming that you have understood and are agreeing to the details mentioned:
        </label>
        <ul style={{ listStyleType: "none", paddingLeft: "0", lineHeight: "1.8", color: "#333", textAlign: "left", }}>
          <li>✔ I confirm that I am the authorized person to upload bank statements on behalf of my company.</li>
          <li>✔ I assure you that uploaded bank statements and company information match; otherwise, no report will be generated.</li>
          <li>
            ✔ I understand that this is a general report, and Credilinq is not providing a solution or guidance for business growth.
          </li>
          <li>✔ I have read and understood the{" "}
            <a href="/terms-and-conditions" target="_blank" style={{ color: "#6a1b9a", textDecoration: "none" }}>
              Terms & Conditions
            </a>.
          </li>
        </ul>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>

      {/* Submit Button */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            backgroundColor: isChecked ? "#6a1b9a" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: isChecked ? "pointer" : "not-allowed",
          }}
          disabled={!isChecked}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;

