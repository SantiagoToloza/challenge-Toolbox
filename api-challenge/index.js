const express = require('express');
const app = express();
const port = 3000;
const apiClient = require('./services/apiServices.js');
const { processFile } = require('./services/fileService');

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});



app.get('/files/data', async (req, res) => {
    try {
        const response = await apiClient.get('/files');
        const files = response.data.files;
        const results = [];

        for (const fileName of files) {
            try {
                const fileResponse = await apiClient.get(`/file/${fileName}`);
                const fileContent = fileResponse.data;

                const lines = await processFile(fileName, fileContent);

                if (lines.length > 0) {
                    results.push({
                        file: fileName,
                        lines: lines,
                    });
                }
            } catch (error) {
                console.error(`error al procesar el archivo ${fileName}:`, error);
            }
        }

        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('error al get de la lista de archivos');
    }
});

module.exports = app;

