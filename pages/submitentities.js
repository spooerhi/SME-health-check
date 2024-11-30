import { useState, useEffect } from 'react';

export default function SubmitEntities() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/fetchEntries');
      const data = await response.json();
      setEntries(data);
    };

    fetchData();
  }, []);

  // Styles for table
  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '50px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  
  };

  const cellStyles = {
    border: '1px solid #555',  
    padding: '12px',  
    textAlign: 'left',
    fontSize: '14px',  
  };

  const headerStyles = {
    backgroundColor: '#333',  
    color: '#fff',  
    fontWeight: 'bold',
    textAlign: 'center',  
  };

  const headingStyles = {
    textAlign: 'center',
    color: '#4a148c',
    marginBottom: '20px',
  };

  const rowHoverStyles = {
    backgroundColor: '#f2f2f2',  
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={headingStyles}>Submitted Entries</h1>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={headerStyles}>ID</th>
            <th style={headerStyles}>Company UEN</th>
            <th style={headerStyles}>Company Name</th>
            <th style={headerStyles}>Full Name</th>
            <th style={headerStyles}>Position</th>
            <th style={headerStyles}>Email</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr
              key={entry.id}
              style={rowHoverStyles}
            >
              <td style={cellStyles}>{entry.ID}</td>
              <td style={cellStyles}>{entry.company_UENe}</td>
              <td style={cellStyles}>{entry.company_name}</td>
              <td style={cellStyles}>{entry.Full_name}</td>
              <td style={cellStyles}>{entry.position}</td>
              <td style={cellStyles}>{entry.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


