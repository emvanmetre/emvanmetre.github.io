const { writeFile } = require("node:fs/promises");
const sass = require('sass');
const path = require('path');
const fs = require('fs');
const tokens = require('../build/tokens/index');


const tokensToCss = (object = {}, base = `-`) =>
  Object.entries(object).reduce((css, [key, value]) => {
    let newBase = base + `-${key}`
    if (typeof value !== "object") {
      return css + newBase + `: ${value};\n`
    }
    return css + tokensToCss(value, newBase)
  }, ``)

const saveTokens = async (filepath, filename, tokens, filetype) => {
  try {
    await writeFile(`${filepath}/${filename}.${filetype}`, tokens)
  } catch (e) {
    console.log("There was an error while saving a file.\n", e)
  }
}

try {
    const cssVariables = tokensToCss(tokens)
    const scssClass = cssVariables.replace(/:.*$/gm, '').replace(/^(?=-).*$/gm, (line) => {
      return '$' + line.replace(/--/, '') + ': var(' + line + ');'})
    saveTokens('src/styles', 'tokens', scssClass, 'scss')
    const cssClass = `:root {\n${cssVariables.replaceAll("--", "  --")}}\n`
    saveTokens('build', 'tokens', cssClass, 'css')

    let result = ''
    fs.readdir(path.join('src/styles/'), function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } 
      //listing all files using forEach
      files.forEach(function (file) {
          // Do whatever you want to do with the file
          result = result + sass.compile(`src/styles/${file}`, {style: "compressed"}).css;
      });
      // console.log(result); 
      saveTokens('build', 'style', result, 'css')
  });
  } catch (e) {
    console.log(
      "Provide a correct argument - a relative path to design tokens.\n",
      e
    )
  }