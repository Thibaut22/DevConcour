var fs = require("fs");

var chaine = 'test ma fonction';
fs.writeFileSync('nameFile', chaine, 'UTF-8');