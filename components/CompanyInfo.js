import React, { useState } from "react";

const CompanyInfo = ({ onNext }) => {
  const [form, setForm] = useState({
    companyUEN: "",
    companyName: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Regex for Company UEN: eight digits followed by a single alphabet
    const uenRegex = /^\d{8}[A-Za-z]$/;

    // Company UEN validation
    if (!uenRegex.test(form.companyUEN)) {
      newErrors.companyUEN = "Invalid UEN format. It should be eight digits followed by an alphabet (e.g., 23141543L).";
    }

    // Company Name validation
    if (!form.companyName.trim()) {
      newErrors.companyName = "Company Name is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Valid if no errors
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
          1
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
          Company Information
        </h2>
      </div>

      {/* Input Fields */}
      <div style={{ display: "flex", gap: "20px" }}>

        
        {/* Company UEN */}
        <div style={{ flex: 1 }}>
        {/* <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            Company UEN
          </label> */}
          <input
            type="text"
            name="companyUEN"
            value={form.companyUEN}
            onChange={handleChange}
            placeholder="Enter Company UEN"
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.companyUEN && (
            <div style={{ color: "red", marginTop: "5px" }}>{errors.companyUEN}</div>
          )}
        </div>

        {/* Company Name */}
        <div style={{ flex: 1 }}>
          
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            style={{
              width: "80%",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.companyName && (
            <div style={{ color: "red", marginTop: "5px" }}>{errors.companyName}</div>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default CompanyInfo;


