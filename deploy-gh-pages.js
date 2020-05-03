var ghpages = require('gh-pages');
var fs = require('fs');

fs.writeFile('dist/CNAME', "www.santiagoep.com", (err) => {
    console.error(err);
});
ghpages.publish('dist', (err) => { 
    console.error(err)
});