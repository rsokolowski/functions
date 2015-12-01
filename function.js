spawn = require('child_process').spawn;

exports.function = function(context, data) {
  console.log('starting function');
  ls = spawn('ps', ['aux'], { stdio: 'inherit' });
  ls.on('close', function (code) {
    console.log('finishing function');
    context.success('ls process exited with code ' + code);
  });
}
