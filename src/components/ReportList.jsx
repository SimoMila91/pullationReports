import React, { useState, useEffect, useContext } from 'react';
import { Container, Item, Grid, Segment, Header, Popup, Input } from 'semantic-ui-react';
import axios from 'axios';
import { Context } from '../context/Context';

const heightSegment = {
  minHeight: 300
};

const padCont = {
  paddingBottom: 100
};


export default function ReportList() {
  const [reports, setReports] = useState([]);
  const { isMobile, large } = useContext(Context);
  const [input, setInput] = useState('');
  const [results, setResults] = useState(reports);

  const handleChange = e => {
    setInput(e.target.value);
  }

  useEffect(() => {
    axios.get("https://pollutionreports.herokuapp.com/reports")
      .then(res => {
        console.log(res);
        setReports(res.data);
      }).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const res = reports.filter(o => 
        o.country.toLowerCase().includes(input.toLowerCase().trim()) 
        || o.city.toLowerCase().includes(input.toLowerCase().trim()));

        setResults(res);
  }, [input, reports])

  return (
    <Container fluid>
      <div style={{padding: '2%'}}>
        <Container fluid textAlign="center" style={padCont}>
        <Grid>
          <Grid.Column width={16}>
            <div  style={{padding: 70, width: 500, margin: 'auto'}}>
            <Popup
                    trigger={<Input 
                                      focus
                                      fluid
                                      icon="search"
                                      position="left"
                                      value={input}
                                      onChange={handleChange}
                                      /> }
                   header="Report Search"
                   content="You can search for a country or a city"
                   on={isMobile ? 'focus' : 'hover'}
                  />
            </div>
          </Grid.Column>
          <Grid.Column width={16}>
            <div>
              <Header style={{padding: 40}}>Database Results</Header>
              {
                reports.length === 0 ? 
                <div style={{height: 1000}}>Loading...</div>
                : 
                <Grid columns={ large ? 2 : 1}>
                {
                  results.map((report, i) => ( 
                      <Grid.Column key={i} textAlign={ isMobile ? 'center' : 'left'} verticalAlign="middle">
                      <Segment style={heightSegment}>
                      <Item.Group>
                        <Item relaxed>
                          <Item.Image size="medium"  src={`https://localhost:3000/images/${report.image}`} alt="ciao" className="tran-img" />
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
                </Grid>
              }
            </div>
          </Grid.Column>        
        </Grid>  
      </Container>
     
      </div>
    </Container>
  )
}