import React, { useState } from "react";

const ApplicantInfo = ({ onNext }) => {
  const [form, setForm] = useState({
    fullName: "",
    position: "",
    email: "",
    reEmail: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone number validation for Singapore
    const phoneRegex = /^[89]\d{7}$/;

    // Full Name validation
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    // Position validation
    if (!form.position.trim()) {
      newErrors.position = "Position within the company is required.";
    }

    // Email validation
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Re-enter Email validation
    if (form.email !== form.reEmail) {
      newErrors.reEmail = "Email addresses do not match.";
    }

    // Phone number validation
    if (!phoneRegex.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid Singapore phone number (starts with 8 or 9 and 8 digits long).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleNext = () => {
    if (validate()) {
      onNext(form); // Proceed to the next step if validation passes
    }
  };

  return (
    <div
      style={{
        // border: "1px solid #ccc",
       //  borderRadius: "8px",
        // padding: "20px",
        // margin: "20px auto",
        // width: "100%",
        //boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Step Indicator */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
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
          2
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
          Applicant Information
        </h2>
      </div>

      {/* Input Fields */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Full Name */}
        <div style={{ flex: "1 1 45%" }}>
          
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.fullName && <div style={{ color: "red", marginTop: "5px" }}>{errors.fullName}</div>}
        </div>

        {/* Position within company */}
        <div style={{ flex: "1 1 45%" }}>
          
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Position within company"
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.position && <div style={{ color: "red", marginTop: "5px" }}>{errors.position}</div>}
        </div>

        {/* Email Address */}
        <div style={{ flex: "1 1 45%" }}>
          
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.email && <div style={{ color: "red", marginTop: "5px" }}>{errors.email}</div>}
        </div>

        {/* Re-enter Email Address */}
        <div style={{ flex: "1 1 45%" }}>
          
          <input
            type="email"
            name="reEmail"
            value={form.reEmail}
            onChange={handleChange}
            placeholder="Re-enter Email Address"
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.reEmail && <div style={{ color: "red", marginTop: "5px" }}>{errors.reEmail}</div>}
        </div>

        {/* Mobile Number */}
        <div style={{ flex: "1 1 45%" }}>
          
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Mobile Number (e.g., +65)"
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.phoneNumber && (
            <div style={{ color: "red", marginTop: "5px" }}>{errors.phoneNumber}</div>
          )}
        </div>   
        
      </div>

      
    </div>
  );
};

export default ApplicantInfo;
