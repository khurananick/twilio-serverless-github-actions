exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.say('Hello World, this is another test!');
  callback(null, twiml);
};
