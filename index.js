const input = process.argv[2];
const fs = require('fs');
const data = require('./data.json');

console.log(data);

fs.writeFile('index.js', third, (err) => {
  if (err) throw err;
  console.log(third);
});

// fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
