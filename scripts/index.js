function toPascalCase(str) {
  return str
    .match(/[a-z]+/gi)
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .join('');
}

module.exports = { toPascalCase };
