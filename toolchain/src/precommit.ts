import { execute } from './execute';

export function preCommit(): Promise<unknown> {
  return Promise.all([
    execute(`prettier --write .github/**/*.yml **/package.json **/*.md **/*.json`),
    execute(`eslint . --fix`),
  ]);
}
