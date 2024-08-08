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

const saveTokens = async (filename, tokens) => {
  try {
    await writeFile(`build/${filename}.css`, tokens)
  } catch (e) {
    console.log("There was an error while saving a file.\n", e)
  }
}

try {
    const cssVariables = tokensToCss(tokens)
    const cssClass = `:root {\n${cssVariables.replaceAll("--", "  --")}}\n`
    saveTokens('tokens', cssClass)

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
      saveTokens('style', result)
  });
  } catch (e) {
    console.log(
      "Provide a correct argument - a relative path to design tokens.\n",
      e
    )
  }