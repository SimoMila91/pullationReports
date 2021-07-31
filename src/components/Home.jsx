import React, {useContext } from 'react';
import { Button, Grid, Image, Icon, Container } from 'semantic-ui-react';
import { Context } from '../context/Context';
import homepage from '../images/homepage.jpg';
import { Link } from 'react-router-dom';

const pos = {
  paddingTop: '12%'
};

const largeButton = {
  width: '9rem'
}

export default function Home() {
  const { isMobile } = useContext(Context);
  return (
    <Container>
      <div style={pos}>
        <Grid columns={isMobile ? 1 : 2}>
          <Grid.Row>
            <Grid.Column textAlign={ isMobile ? 'center' : 'left'}>
              <h1>Pollution In The World</h1>
              <h5>Let's help each other help the world</h5>
              <br />
              <p className="line">
              Pollution is a global environmental problem, which affects all states and all human beings. 
              In fact, pollution in the world today constitutes a threat to nature and a danger to all living beings and also to human beings.<br />
              Pollutants, in fact, alter the environment, and, therefore, the air, water and soil, and put the health of the entire planet at risk.<br />
              <br />
              If you need to report a pollution click below.
              </p>
              <div>
              {
                isMobile ? 
                <Button primary><Link to="/report" className="no-color">Send Report</Link></Button>
                :
                <Button animated style={largeButton} color="blue">
                  <Button.Content visible><Icon name="arrow right" /></Button.Content>
                  <Button.Content hidden>
                    <Link to="/report" className="no-color">Send Report</Link>
                  </Button.Content>
                </Button>
              }
              </div>
            </Grid.Column>
            <Grid.Column only="computer tablet">
              <Image src={homepage} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  );
}