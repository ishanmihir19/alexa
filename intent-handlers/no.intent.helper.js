var utils = require('../common/utils'),
    constants = require('../common/constants'),
    responseBuilder = require('../response-builders/response.builder'),
    bestOffers = constants.bestOffers,
    offerByCategory = constants.offerByCategory,
    endResponses = constants.endResponses;

function handleNoResponse(intent, session, callback) {
    var speechOutput = "Ok. How may I help you ?  ",
        repromptText = speechOutput;
    var sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText,
        "lastIntent": intent.name
    };
    callback(sessionAttributes,
        responseBuilder.buildSpeechletResponse(constants.cardTitle, speechOutput, speechOutput, false));
}


module.exports = {
    handleNoResponse: handleNoResponse
}