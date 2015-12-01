spawn = require('child_process').spawn;

exports.function = function(context, data) {
  ls = spawn('ps', ['aux'], { stdio: 'inherit' });
  ls.on('close', function (code) {
    console.log('close-done');
    context.success('ls process exited with code ' + code);
  });
  console.log('function-done');

}
