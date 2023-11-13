# CSV Parser

If you're looking to parse CSV (Comma-Separated Values) files in Node.js, you can use the csv-parser library. This library allows you to easily read and parse CSV files line by line. First, you'll need to install the library using npm or yarn. Here's how you can do it using npm:

```bash
    npm install csv-parser
```

Once you have the library installed, you can use it in your Node.js application like this:

```javascript
    const fs = require('fs');
    const csvParser = require('csv-parser');

    const results = [];

    fs.createReadStream('your-csv-file.csv')
    .pipe(csvParser())
    .on('data', (row) => {
        // Each row is an object where keys are column headers and values are cell values
        results.push(row);
    })
    .on('end', () => {
        // Do something with the parsed data
        console.log(results);
  });
```

In this example, replace 'your-csv-file.csv' with the path to your CSV file. The csv-parser library will parse the CSV file line by line and emit data events for each row, allowing you to process the data as needed.

## Stream API

In Node.js, streams are a powerful and efficient way to handle data, especially large datasets, by processing them piece by piece instead of loading the entire data into memory. There are four types of streams in Node.js: Readable, Writable, Duplex, and Transform streams. Here's a brief overview of each:

Readable Streams: Readable streams allow you to read data from a source. You can create a readable stream from various sources like files, HTTP requests, or even generate data programmatically. Example:

```javascript
    const fs = require('fs');
    const readableStream = fs.createReadStream('file.txt');
    readableStream.on('data', (chunk) => {
    console.log(chunk);
    });
```

`Writable Streams:` Writable streams allow you to write data to a destination. You can create a writable stream to write data to a file, an HTTP response, or any other writable destination. Example:

```javascript
    const fs = require('fs');
    const writableStream = fs.createWriteStream('output.txt');
    writableStream.write('Hello, World!');
```

`Duplex Streams:` Duplex streams implement both Readable and Writable interfaces, allowing you to both read from and write to the stream. Example:

```javascript
    const { Duplex } = require('stream');
    const myDuplexStream = new Duplex({
    read(size) {
        // Implement read logic here
    },
    write(chunk, encoding, callback) {
        // Implement write logic here
    }
    });
```

`Transform Streams:` Transform streams are a type of duplex stream where the output is computed based on the input. You can modify the data as it passes through the stream. Example:

```javascript
    const { Transform } = require('stream');
    const myTransformStream = new Transform({
    transform(chunk, encoding, callback) {
        // Implement transformation logic here
        this.push(transformedChunk);
        callback();
    }
    });
```

Using streams, you can efficiently process data in Node.js without loading the entire dataset into memory, making your applications more scalable and memory-efficient.
