const input = process.argv[2];
const fs = require('fs');
const data = require('./data.json');

// fs.writeFile('index.js', input, (err) => {

// fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
if (input === 'read') {
  console.log(data.notes);
}

for (const property in data.notes) {
  console.log(`${property}: ${data.notes[property]}`);
}
