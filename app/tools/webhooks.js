/**
 * Created by lichun on 2016/11/22.
 */
const exec = require('child_process').exec;
export function pullStaticCode(cb) {
   exec('git pull /home/project/sampsonapp', function (err, stdout, stderr) {
       cb(err, stdout, stderr)
   })
}