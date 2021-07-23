import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Header } from 'semantic-ui-react';

const formStyle = {
  width: '36rem',
  margin: 'auto',
};

const button = {
  margin: 'auto'
};

export default function Report() {

  const [data, setData] = useState({
    city: '',
    stateReport: '', 
    address: ''
  });
  
  const onSubmit = e => {
    e.preventDefault();
    console.log('inviato');
  }; 

  const handleChange = e => {
    setData({...data, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Header as='h2'>Where do you want to report the pollution?</Header>
      <div style={formStyle} className="marginForm">
        <Form onSubmit={onSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              required
              name="stateReport"
              size="mini"
              label="State"
              type="text"
              value={data.stateReport}
              onChange={handleChange}
            />
            <Form.Input 
              required
              name="city"
              size="mini"
              label="City"
              type="text"
              value={data.city}
              onChange={handleChange}
            />
            <Form.Input 
              required
              name="address"
              size="mini"
              label="Address"
              type="text"
              value={data.address}
              onChange={handleChange}
            /> 
          </Form.Group>
          <Form.Group>
            <Button type="submit" className="marginForm" style={button}>Send Report</Button>
          </Form.Group>
        </Form>
      </div>
      
    </Container>
  );
}