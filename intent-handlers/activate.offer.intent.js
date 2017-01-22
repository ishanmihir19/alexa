var utils = require('../common/utils'),
    constants = require('../common/constants'),
    responseBuilder = require('../response-builders/response.builder'),
    bestOffers = constants.bestOffers,
    offerByCategory = constants.offerByCategory,
    endResponses = constants.endResponses;


function handleActivateOffer(intent, session, callback) {
    var lastIntent = session.attributes.lastIntent,
        speechOutput, repromptText, sessionAttributes,
        lastOffer = session.attributes.lastOffer;

    if (lastOffer) {
        speechOutput = "Your offer " + lastOffer.name + " for the category " + lastOffer.category + " has been activated . " + lastOffer.rewardOffered + ".";
        repromptText = speechOutput;
        sessionAttributes = {
            "speechOutput": speechOutput,
            "repromptText": repromptText,
            "lastIntent": intent.name,
            "lastOffer": lastOffer,
            "category": lastOffer.category
        };
    }
    else {
        speechOutput = "Sorry, you have not chosen any offer to activate.  ";
        repromptText = speechOutput;
        sessionAttributes = {
            "speechOutput": speechOutput,
            "repromptText": repromptText,
            "lastIntent": intent.name
        };
    }
    callback(sessionAttributes,
        responseBuilder.buildSpeechletResponse(constants.cardTitle, speechOutput, speechOutput, false));
}


module.exports = {
    handleActivateOffer : handleActivateOffer
}