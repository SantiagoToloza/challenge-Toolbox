const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const apiClient = require('./services/apiServices.js');
const { processFile } = require('./services/fileService');


app.use(cors({
    origin: 'http://localhost:3001'
}));



app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});

app.get('/files/data', async (req, res) => {
    try {
        const { fileName } = req.query;
        if (fileName) {
            try {
                const fileResponse = await apiClient.get(`/file/${fileName}`);
                const fileContent = fileResponse.data;
                const lines = await processFile(fileName, fileContent);
                return res.json([{ file: fileName, lines }]);
            } catch (error) {
                return res.status(500).send('Error al procesar la solicitud');
            }
        }
        const response = await apiClient.get('/files');
        const files = response.data.files;
        const results = [];

        for (const file of files) {
            try {
                const fileResponse = await apiClient.get(`/file/${file}`);
                const fileContent = fileResponse.data;
                const lines = await processFile(file, fileContent);

                if (lines.length > 0) {
                    results.push({ file, lines });
                }
            } catch (error) {
                // console.error(`error al procesar el archivo ${file}:`:`, error.message);
            }
        }

        res.json(results);
    } catch (error) {
        console.error('error en el endpoint /files/data:', error.message);
        res.status(500).send('Error al procesar la solicitud');
    }
});


app.get('/files/list', async (req, res) => {
    try {
        const { fileName } = req.query;
        const response = await apiClient.get('/files');
        const files = response.data.files;
        if (fileName) {
            files = files.filter(file => file.includes(fileName));
        }
        res.json(files);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la lista de archivos');
    }
})


module.exports = app;

