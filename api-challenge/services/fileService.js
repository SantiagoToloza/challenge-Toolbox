const csv = require('csv-parser');
const { Readable } = require('stream');

const isValidLine = (data) => {
    const allFields = data.file && data.text && data.number && data.hex;
    const isNumberValid = !isNaN(Number(data.number));
    const isHexValid = /^[a-fA-F0-9]{32}$/.test(data.hex);
    return allFields && isNumberValid && isHexValid;
};

const processFile = async (fileName, fileContent) => {
    const lines = [];

    const stream = Readable.from([fileContent]);

    return new Promise((resolve, reject) => {
        stream
            .pipe(csv())
            .on('data', (data) => {
                if (isValidLine(data)) {
                    lines.push({
                        text: data.text,
                        number: Number(data.number),
                        hex: data.hex,
                    });
                }
            })
            .on('end', () => {
                resolve(lines);
            })
            .on('error', (error) => {
                console.error(`error al procesar el archivo ${fileName}:`, error);
                reject(error);
            });
    });
};

module.exports = { processFile };
