const input = process.argv[2];
const fs = require('fs');
const data = require('./data.json');

// fs.writeFile('index.js', input, (err) => {

// fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);


if (input === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
} else if (input === 'create') {
  // console.log(data.nextId, data.notes)
  data.notes[data.nextId] = process.argv[3]
  data.nextId++;
  console.log(data.nextId, data.notes)
  // data.nextId++;
  // data.notes.nextId = process.argv[3];
}
