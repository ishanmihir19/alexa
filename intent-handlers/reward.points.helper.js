var utils = require('../common/utils'),
    constants = require('../common/constants'),
    responseBuilder = require('../response-builders/response.builder'),
    bestOffers = constants.bestOffers,
    offerByCategory = constants.offerByCategory,
    endResponses = constants.endResponses;

function handleRewardPointsIntent(intent, session, callback) {
    var speechOutput = "You have accumulated 50,589 points worth upto 253 pounds.",
        repromptText = speechOutput;
    var sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText
    };
    callback(sessionAttributes,
        responseBuilder.buildSpeechletResponse(constants.cardTitle, speechOutput, speechOutput, false));
}

module.exports = {
    handleRewardPointsIntent : handleRewardPointsIntent
}