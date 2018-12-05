var prompt = require('prompt');
var fs = require('fs');
var path = require('path');
var mockup = require('../helpers/cli/component.js');
var pCase = require('../scripts/index.js');

return new Promise((resolve, reject) => {
  prompt.get(
    [{ name: 'Component', description: 'Siva Component To Generate' }],

    function(err, result) {
      if (err) reject(err);
      resolve(result);
    }
  );
}).then(sivaComponent);

function sivaComponent(input) {
  return new Promise((resolve, reject) => {
    var outputDirectory = path.join(
      __dirname,
      '../public/components',
      `${pCase.toPascalCase(input.Component).trim()}.js`
    );
    fs.writeFile(outputDirectory, mockup.component, 'utf8', (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}
