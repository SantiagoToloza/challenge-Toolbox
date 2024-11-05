import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Navbar, Table } from 'react-bootstrap';



const data = [
  { fileName: 'file1.csv', text: 'RgTya', number: '64075909', hex: '70ad29aacf0b690b0467fe2b2767f765' },
  { fileName: 'file1.csv', text: 'RgTya', number: '64075909', hex: '70ad29aacf0b690b0467fe2b2767f765' },
]

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="danger" variant="dark" className='mb-3'>
          <Navbar.Brand href="#home">React Test App</Navbar.Brand>
        </Navbar>
        <Container className="mt-4">
          <h1>Files</h1>
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
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.fileName}</td>
                  <td>{item.text}</td>
                  <td>{item.number}</td>
                  <td>{item.hex}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    </div>
  );
}

export default App;