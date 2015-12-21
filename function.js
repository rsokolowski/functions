spawn = require('child_process').spawn;

exports.fooBar = function(context, data) {
  context.success('it works blah blah blah blah blah ' + data);
}
