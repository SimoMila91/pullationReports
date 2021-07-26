import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

export default function ReportList() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/reports")
      .then(res => {
        console.log(res);
        setReports(res.data);
      }).catch(err => console.log(err));
  }, [])
  
  return (
    <Container>
      {
        reports.map((report, i) => ( 
          <img key={i} width="500" height="500" src={`http://localhost:3000/images/${report.image}`} alt="ciao" />
        ))
      }
    </Container>
  )
}