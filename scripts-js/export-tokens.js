const { writeFile } = require("node:fs/promises");
const tokens = require('../build/tokens/index');


const tokensToCss = (object = {}, base = `-`) =>
  Object.entries(object).reduce((css, [key, value]) => {
    let newBase = base + `-${key}`
    if (typeof value !== "object") {
      return css + newBase + `: ${value};\n`
    }
    return css + tokensToCss(value, newBase)
  }, ``)

const saveTokens = async (tokens) => {
  try {
    await writeFile('src/styles/tokens.css', tokens)
  } catch (e) {
    console.log("There was an error while saving a file.\n", e)
  }
}

try {
    const cssVariables = tokensToCss(tokens)
    const cssClass = `:root {\n${cssVariables.replaceAll("--", "  --")}}\n`
    saveTokens(cssClass)
  } catch (e) {
    console.log(
      "Provide a correct argument - a relative path to design tokens.\n",
      e
    )
  }