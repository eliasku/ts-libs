import {exec} from 'child_process';

export function execute(cmd: string) {
  return new Promise((resolve, reject) => {
    const env = Object.assign({FORCE_COLOR: "1"}, process.env);
    const pr = exec(cmd, {env, encoding: 'utf-8'}, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
    if (pr.stdout) {
      pr.stdout.on('data', function (data) {
        process.stdout.write(data);
      });
    }
  });
}
