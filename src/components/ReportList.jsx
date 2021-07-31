import React, { useState, useEffect, useContext } from 'react';
import { Container, Item, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { Context } from '../context/Context';

export default function ReportList() {
  const [reports, setReports] = useState([]);
  const { isMobile } = useContext(Context);

  useEffect(() => {
    axios.get("http://localhost:3000/reports")
      .then(res => {
        console.log(res);
        setReports(res.data);
      }).catch(err => console.log(err));
  }, [])
  
  return (
    <Container fluid>
      <div style={{padding: '2%'}}>
      <Grid columns={ isMobile ? 1 : 2}>
      <Grid.Row>
      {
        reports.map((report, i) => ( 
            <Grid.Column textAlign={ isMobile ? 'center' : 'left'} verticalAlign="middle">
              <Segment>
            <Item.Group>
              <Item key={i}>
                <Item.Image size="small"  src={`http://localhost:3000/images/${report.image}`} alt="ciao" />
                <Item.Content>
                  <Item.Header as="h4">{report.country}</Item.Header>
                  <Item.Meta>
                     {report.city}, {report.address}
                  </Item.Meta>
                  <Item.Description>{report.description}</Item.Description>
                  <Item.Extra>Date: {report.reportDate} </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
            </Segment>
            </Grid.Column>
        ))
      }
      </Grid.Row>
      </Grid>
      </div>
    </Container>
  )
}