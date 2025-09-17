const watch = require('node-watch')
const { exec } = require('child_process')

watch(
  'src',
  {
    recursive: true,
    filter: /.scss$/,
  },
  function () {
    exec('npx tsc --outDir ./build && node scripts-js/export-tokens.js && node scripts-js/compile-scss.js', (err, stdout, stderr) => {
      if (err) {
        console.error(stderr)
      } else {
        console.log(stdout)
      }
    })
  },
)
