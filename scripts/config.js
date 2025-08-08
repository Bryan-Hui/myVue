const path = require('path')
const buble = require('rollup-plugin-buble')
const alias = require('rollup-plugin-alias')
const cjs = require('rollup-plugin-commonjs')
const replace = require('rollup-plugin-replace')
const node = require('rollup-plugin-node-resolve')
const flow = require('rollup-plugin-flow-no-whitespace')
const version = process.env.VERSION || require('../package.json').version

const banner = 
  `/*!\n` + 
  `version ${version} \n` + 
  `(c) 2020 - ${new Date().getFullYear()} \n` +
  `Released under the MIT License.\n` +
  `*/`



  
  
  


