import yargs from 'yargs';
import {preCommit} from "./precommit";

const argv = yargs
  .command('pre-commit', 'Check before commit')
  .help()
  .argv;

if (argv._.includes('pre-commit')) {
  await preCommit();
}
