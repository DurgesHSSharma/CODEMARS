import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const res = await axios.get(`/api/medical-records/${localStorage.getItem('userId')}`);
      setRecords(res.data);
    };
    fetchRecords();
  }, []);

  return (
    <div>
      <h2>Your Medical Records</h2>
      <ul>
        {records.map(record => (
          <li key={record._id}>
            {record.type} - <a href={record.fileUrl} target="_blank" rel="noopener noreferrer">View File</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalRecords;
