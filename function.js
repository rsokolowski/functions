<<<<<<< HEAD
exports.function = function(context, data) {
  console.log(data);
  context.done();
=======
spawn = require('child_process').spawn;

exports.fooBar = function(context, data) {
  context.success('it works ' + data);
>>>>>>> 12402cb793c46943a3ec860c0e97c2ee02c7b2fb
}
