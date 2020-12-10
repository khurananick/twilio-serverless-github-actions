exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.say('Hello World, this is a test!');
  callback(null, twiml);
};
