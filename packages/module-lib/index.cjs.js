require('exports-lib')

module.exports.moduleType = 'cjs'

module.exports.check = function check(exportsLib) {
  if (exportsLib !== module.exports.moduleType) throw new Error('Peer dependency mismatch!')
}
