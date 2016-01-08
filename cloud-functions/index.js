var language = require('googleapis').translate();
var sendgrid =require('sendgrid');

exports.translator = function(context, data) {
  language.translations.list({
    q: [data.subject, data.body],
    target: data.target_language
  }, function(err, result) {
    email = new sendgrid.Email();
    email.addTo(data.recipient);
    email.setText(result.translatedText);

    sendgrid.send(email, function(err, result) {
      context.done(err);
    });
  });
}