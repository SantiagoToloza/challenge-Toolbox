import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Navbar, Spinner, Table } from 'react-bootstrap';
import axios from 'axios';






function App() {
  const [data, setData] = useState([]);

  console.log(data)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('http://localhost:3000/files/data')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('error al obtener los datos:', error);
        setLoading(false)
      });
  }, []);
  return (
    <div className="App">
      <>
        <Navbar bg="danger" variant="dark" className='mb-3'>
          <Navbar.Brand href="#home">React Test App</Navbar.Brand>
        </Navbar>
        <Container className="mt-4">
          <h1>Files</h1>
          {loading && <Spinner />}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((file) => (
                file.lines.map((line, index) => (
                  <tr key={`${file.file}-${index}`}>
                    <td>{file.file}</td>
                    <td>{line.text}</td>
                    <td>{line.number}</td>
                    <td>{line.hex}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    </div>
  );
}

export default App;