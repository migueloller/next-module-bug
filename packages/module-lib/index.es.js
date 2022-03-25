import 'exports-lib'

export const moduleType = 'esm'

export function check(exportsLib) {
  if (exportsLib !== moduleType) throw new Error('Peer dependency mismatch!')
}
