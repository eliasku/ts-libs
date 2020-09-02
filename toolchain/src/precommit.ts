import {execute} from "./execute";

export function preCommit() {
  return Promise.all([
    execute(`prettier --write .github/**/*.yml **/package.json **/*.md **/*.json`),
    execute(`eslint . --fix`)
  ]);
}
