spawn = require('child_process').spawn;

exports.function = function(context, data) {
  ls = spawn('ls', [], { stdio: 'inherit' });
  ls.on('close', function (code) {
    context.success('ls process exited with code ' + code);
  });
}
