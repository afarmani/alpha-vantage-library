const fs = require('fs').promises;
const directory = process.argv[2];
console.log('::delete directory::', directory)

fs.rmdir(directory, {recursive: true})
    .then(() => console.log('::delete directory::removed::', directory));
