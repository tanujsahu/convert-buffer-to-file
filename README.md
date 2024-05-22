# convert-buffer-to-file
File Type Detector and Converter


# File Type Detector and Converter

This Node.js script reads the first few bytes of a file to determine its type based on its file signature (magic bytes). If the file is identified as a supported type (PNG, JPEG, PDF, DOC, Excel), it reads the file and writes it to a new file with the appropriate extension.

## Usage

1. Clone this repository or download the script (`index.js`) to your local machine.

2. Install Node.js if you haven't already: [Node.js Installation](https://nodejs.org/)

3. Open a terminal or command prompt and navigate to the directory containing the script.

4. Run the script with Node.js, providing the input file path as an argument:

```bash
node index.js input.doc
