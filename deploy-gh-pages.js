var fs = require('fs');

fs.writeFile('dist/CNAME', "www.santiagoep.com", (err) => {
    if (err) console.error(err);
});