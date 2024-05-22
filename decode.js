import { openSync, readSync, closeSync } from 'fs';
import { readFile, writeFile } from 'fs';

// Function to check file type based on file signature
function checkFileType(buffer) {
  const fileSignature = buffer.toString('hex', 0, 4);
  switch (fileSignature) {
    case '89504e47':
      return 'PNG';
    case 'ffd8ffe0':
    case 'ffd8ffe1':
    case 'ffd8ffe2':
      return 'JPEG';
    case '25504446':
      return 'PDF';
    case 'd0cf11e0':
      return 'DOC';
    case '504b0304':
      return 'EXCEL';
    default:
      return 'Unknown';
  }
}

// Read the first few bytes of the file to determine the file type
const buffer = Buffer.alloc(4); // Read the first 4 bytes
const fd = openSync('input.png', 'r');
readSync(fd, buffer, 0, 4, 0);
closeSync(fd);

// Check the file type
const fileType = checkFileType(buffer);
console.log('File type:', fileType);

// If the file type is one of the supported types, read and write to a new file
if (['PNG', 'JPEG', 'PDF', 'DOC', 'EXCEL'].includes(fileType)) {
  readFile('input.png', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    writeFile(`output.${fileType.toLowerCase()}`, data, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log(`${fileType} file written successfully`);
      }
    });
  });
} else {
  console.log('Unsupported file type. Skipping writing.');
}
