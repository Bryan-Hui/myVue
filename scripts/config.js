const version = process.env.VERSION || require('../package.json').version

const banner = 
  `/*!\n` + 
  `version ${version} \n` + 
  `(c) 2020 - ${new Date().getFullYear()} \n` +
  `Released under the MIT License.\n` +
  `*/` 
