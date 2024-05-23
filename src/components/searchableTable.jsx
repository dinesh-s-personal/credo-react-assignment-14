import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchableTable = ({ data, theme }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const objNavigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const btnGetStates = (countryName) => {
    objNavigate('/states/' + countryName)
  }

  return (
    <div style={{ display: 'flex', alignItems: "flex-end", flexDirection: "column", justifyContent: 'flex-end', marginBottom: '10px' }}
        className={theme ? 'App-Dark' : 'App-Lite'}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '10px', padding: '5px', width: '20%' }}
        className={theme ? 'App-Dark' : 'App-Lite input-box'}
      />
      <table style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
            className={theme ? 'App-Dark' : 'App-Lite'}>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
                <td>{index+1}</td>    
                {Object.values(item).map((value, idx) => (
                    (value !== "Country" &&
                        <td key={idx}>{value}</td>
                    )
                ))}
                <td>
                    <Button variant="link" onClick={() => btnGetStates(item.name) }>See States</Button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchableTable;
