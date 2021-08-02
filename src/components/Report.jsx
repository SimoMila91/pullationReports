import React, { useState, useMemo, useEffect } from 'react';
import { Form, Button, Container, Header, Dropdown, Icon, Message, TextArea } from 'semantic-ui-react';
import countryList from 'react-select-country-list';
import Compress from 'react-image-file-resizer';
import axios from 'axios';
import MessageModal from './MessageModal';



const formStyle = {
  width: '36rem',
  margin: 'auto',
  textAlign: 'left'
};

const button = {
  margin: 'auto'
};

export default function Report() {
  const [city, setCity] = useState('');
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [control, setControl] = useState(false);
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState({
    variant: false,
    message: ''
  });
  const [modal, setModal] = useState(false);

  const options = useMemo(() => countryList().getData(), []);

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);
    data.append("city", city);
    data.append("address", address);
    data.append("country", country);
    data.append("description", description.replaceAll("'", "''"));

    axios.post("https://pollutionreports.herokuapp.com/upload", data)
      .then(res => {
        setMessage({
          variant: true,
          message: res.data
        });
        setAddress('');
        setCity('');
        setCountry('');
        setName('');
        setFile();
        setDescription('');
        setTimeout(() => {
          setMessage({
              variant: false,
              message: ''
          })
          setModal(true);
        }, 6000);
      }).catch(err => console.log(err));
  }; 

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if  (city !== "" &&  address !== "" && country !== "" && name !== undefined && description !== "" && description.length <= 450) {
      setControl(true); 
    } else {
      setControl(false);
    }
  }, [city, address, country, name, description]);

  const changeHandler = (e, value) => {
    let res = countryList().getLabel(value.value);
    setCountry(res);
  };

  const fileChange = e => {
    const fileData = e.target.files[0]; 
    const ext = fileData.name.split('.').pop();
    if (ext.match(/(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      Compress.imageFileResizer(
        fileData, 
        480,
        480,
        "JPEG, PNG, JPG",
        70, 
        0, 
        (uri) => {
          console.log(uri);
          setName(fileData.name);
          setFile(fileData);
          setError(false);
        },
        "base64"
      );
    } else {
      setError(true);
    }
  };

  const descLen = description.length > 450 ? { error: "450 characters  maximux"} : null;

  return (
    <Container textAlign="center">
      {
        !message.variant ? 
        <>
          <Header as='h2'>Where do you want to report the pollution?</Header>
          <div style={formStyle} className="marginForm">
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>Country</label>
                <Dropdown
                  placeholder="Select country"
                  fluid
                  options={options}
                  text={country}
                  selection
                  onChange={changeHandler}
                />
              </Form.Field>  
              <Form.Group widths="equal" className="marginForm">
              <Form.Input 
                  size="mini"
                  label="City"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                /> 
                <Form.Input 
                  size="mini"
                  label="Address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                /> 
              </Form.Group>
              <Form.Field
              className="marginForm"
                control={TextArea}
                {...descLen}
                label="Description"
                maxlength="490"
                placeholder="Describe what you see...450 characters maximux"
                onChange={e => setDescription(e.target.value)}
              />
              <Form.Field className="marginForm">
              <label>Pollution's image</label>
                    <Button as="label" htmlFor="file" type="button" animated="fade">
                      <Button.Content visible>
                        <Icon name="file" />
                      </Button.Content>
                      <Button.Content hidden>Choose a File</Button.Content>
                    </Button>
                    <input
                      type="file"
                      id="file"
                      hidden
                      onChange={fileChange}
                    />
                    <Form.Input
                      className="marginForm"
                      fluid
                      label="File Chosen: "
                      placeholder="Use the above bar to browse your file system"
                      readOnly
                      value={name}
                      error={ error ? { 
                        content: 'You may just upload images',
                        pointing: 'below',
                      } : null }
                    />
              </Form.Field>
              <Form.Group>
                {
                  !control ?  
                    <Button style={button} className="marginForm"  disabled>Send Report</Button>
                  : 
                    <Button type="submit" style={button} className="marginForm" primary>Send Report</Button> 
                }
              </Form.Group>
            </Form>
          </div>
      </>
      : 
      <div className="messagePos">
        <Message 
            success
            header={message.message}
            content="you will be redirected to the home page in 4 seconds"
       />
      </div>
      }
      <MessageModal open={modal} closeModal={closeModal} />
    </Container>
  );
}