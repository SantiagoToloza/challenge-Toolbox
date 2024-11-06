import React, { useEffect, useState } from 'react'
import { Container, Navbar, Spinner, Table, Form, Button } from 'react-bootstrap'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [fileName, setFileName] = useState('')

  useEffect(() => {
    fetchData()
  }, [fileName])

  const fetchData = (fileName = '') => {
    setLoading(true)
    const url = fileName ? `http://localhost:3000/files/list?fileName=${fileName}` : 'http://localhost:3000/files/data'
    axios.get(url)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('error al obtener los datos:', error)
        setLoading(false)
      })
  }

  const handleFilter = (e) => {
    e.preventDefault()
    fetchData(fileName)
  }

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
                onChange={(e) => setFileName(e.target.value)}
                placeholder='Enter file name'
              />
            </Form.Group>
            <Button variant='primary' type='submit' className='mt-2'>Filter</Button>
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
            {data?.map((file, fileIndex) => (
              file.lines && file.lines.length > 0 ? (
                file.lines.map((line, index) => (
                  <tr key={`${file.file}-${index}`}>
                    <td>{file.file}</td>
                    <td>{line.text}</td>
                    <td>{line.number}</td>
                    <td>{line.hex}</td>
                  </tr>
                ))
              ) : (
                <tr key={`no-details-${fileIndex}`}>
                  <td>{file}</td>
                  {/* <td colSpan="3">No details available</td> */}
                </tr>
              )
            ))}
          </Table>
        </Container>
      </>
    </div>
  )
}

export default App
