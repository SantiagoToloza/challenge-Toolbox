import React, { useEffect } from 'react';
import { Container, Navbar, Spinner, Table, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const fileNameParam = searchParams.get('fileName');
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const fileName = useSelector((state) => state.fileName);

  useEffect(() => {
    fetchData();
  }, [fileNameParam]);

  const fetchData = () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    console.log(fileNameParam)
    const url = fileNameParam === null || fileNameParam === ''
      ? `http://localhost:3000/files/data`
      : `http://localhost:3000/files/list?fileName=${fileNameParam}`

    axios
      .get(url)
      .then((response) => {
        dispatch({ type: 'SET_DATA', payload: response.data });
        dispatch({ type: 'SET_LOADING', payload: false });
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setSearchParams({ fileName });
  };

  const handleFileNameChange = (e) => {
    dispatch({ type: 'SET_FILE_NAME', payload: e.target.value });
  };

  return (
    <div className='App'>
      <>
        <Navbar bg='danger' variant='dark' className='mb-3'>
          <Navbar.Brand href='#home'>React Test App</Navbar.Brand>
        </Navbar>
        <Container className='mt-4'>
          <h1>Files</h1>
          <Form onSubmit={handleFilter} className='mb-3'>
            <Form.Group>
              <Form.Label>Filter by File Name</Form.Label>
              <Form.Control
                type='text'
                value={fileName}
                onChange={handleFileNameChange}
                placeholder='Enter file name'
              />
            </Form.Group>
            <Button variant='primary' type='submit' className='mt-2'>
              Filter
            </Button>
          </Form>
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
              {data?.map((file, fileIndex) =>
                file.lines && file.lines.length > 0 ? (
                  file.lines.map((line, index) => (
                    <tr key={`${file.file}-${index}`}>
                      <td>{file.file}</td>
                      <td>{line.text}</td>
                      <td data-testid="file-number-0">{line.number}</td>
                      <td>{line.hex}</td>
                    </tr>
                  ))
                ) : (
                  <tr key={`no-details-${fileIndex}`}>
                    <td>{file}</td>
                    <td colSpan="3">No details available</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Container>
      </>
    </div>
  );
}

export default App;
