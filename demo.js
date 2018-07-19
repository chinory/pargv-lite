#!/usr/bin/env node
'use strict'
const BASENAME = require('path').basename(process.argv[1])

const opts = (() => {
  const parseArgv = require('.')
  const options = {
    action: { set: ['n', 'dry-run'], def: true },
    verbose: { set: ['v', 'verbose'], def: false },
    mode: { set: ['m', 'mode'], def: 'default' },
    includes: { set: ['i', 'include'], def: [] },
    unopened_option: { set: [], def: false },
    help: { set: ['h', 'help'], def: false },
    version: { set: ['version'], def: false },
    rm: { set: ['r', 'rm'], def: {
      force: { set: ['f', 'force'], def: false },
      prompt: { set: ['i'], def: false },
      prompt_once: { set: ['I'], def: false },
      interactive: { set: ['interactive'], def: 'always' },
      one_file_system: { set: ['one-file-system'], def: false },
      preserve_root: { set: ['no-preserve-root'], def: true },
      recursive: { set: ['r', 'R', 'recursive'], def: false },
      remove_empty_dir: { set: ['d', 'dir'], def: false },
      verbose: { set: ['v', 'verbose'], def: false },
      help: { set: ['h', 'help'], def: false },
      dev: { set: ['dev'], def: {
        action: { set: ['n', 'dry-run'], def: true },
        verbose: { set: ['v', 'verbose'], def: false },
        help: { set: ['h', 'help'], def: false },
      }}
    }}
  }
  try {
    return parseArgv(process.argv.slice(2), options)
  } catch (err) {
    console.error(`${BASENAME}: ${err.message}`)
    console.error(`Try '${BASENAME} --help' for more information.`)
    process.exit(1)
  }
})()

const pkg = require('./package')
if (opts.help) {
  console.log(`Usage: ${BASENAME} [OPTIONS]`)
} else if (opts.version) {
  console.log(`${pkg.name} ${pkg.version}`)
} else {
  console.log(opts)
}