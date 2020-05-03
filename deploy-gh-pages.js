var ghpages = require('gh-pages');
var fs = require('fs');

fs.writeFile('dist/CNAME', "www.santiagoep.com", (err) => {
    if (err) console.error(err);
});
ghpages.publish('dist', (err) => {
    if (err) console.error(err);
});