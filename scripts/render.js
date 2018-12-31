var prompt = require('prompt');
var fs = require('fs');
var path = require('path');
var mockup = require('../helpers/cli/render.js');
var pCase = require('../scripts/index.js');

return new Promise((resolve, reject) => {
  prompt.get(
    [{ name: 'Render', description: 'Siva render to generate' }],

    function(err, result) {
      if (err) reject(err);
      resolve(result);
    }
  );
}).then(result => {
  sivaJsRender(result), sivaHtmlRender(result);
});

function sivaJsRender(input) {
  return new Promise((resolve, reject) => {
    var outputDirectory = path.join(
      __dirname,
      '../views',
      `${pCase.toPascalCase(input.Render).trim()}.js`
    );
    fs.writeFile(outputDirectory, mockup.jsRender, 'utf8', (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

function sivaHtmlRender(input) {
  return new Promise((resolve, reject) => {
    var outputDirectory = path.join(
      __dirname,
      '../public',
      `${pCase.toPascalCase(input.Render).trim()}.html`
    );
    fs.writeFile(outputDirectory, mockup.htmlRender, 'utf8', (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}
