const input = process.argv[2];
const fs = require('fs');
const data = require('./data.json');

// fs.writeFile('index.js', input, (err) => {

if (input === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }}
  } else if (input === 'create') {
    data.notes[data.nextId] = process.argv[3];
    data.nextId++;
    console.log(data.nextId, data.notes);
    fs.writeFile(data, JSON.stringify(data, null, 2), err => {
      if (err) {
        throw err
      }
    }
  }
}
