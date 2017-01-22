var utils = require('../common/utils'),
    offersByCategoryIntentHelper = require('./offers.by.category.helper'),
    bestOffersIntentHelper = require('./best.offers.intent.helper'),
    constants = require('../common/constants'),
    responseBuilder = require('../response-builders/response.builder'),
    bestOffers = constants.bestOffers,
    offerByCategory = constants.offerByCategory,
    endResponses = constants.endResponses;

function handleNextOffer(intent, session, callback) {

    var lastIntent = session.attributes.lastIntent,
        speechOutput, repromptText;

    if (lastIntent === 'bestOffers') {
        intent.name = 'bestOffers';
        bestOffersIntentHelper.handleBestOffers(intent, session, callback);
    }
    else if (lastIntent === 'offerByCategory') {
        intent.name = 'offerByCategory';
        offersByCategoryIntentHelper.handleOffersByCategory(intent, session, callback);
    }
    else {
        speechOutput = "We could not understand what else to show! ";
        repromptText = speechOutput;
        var sessionAttributes = {
            "speechOutput": speechOutput,
            "repromptText": repromptText,
            "lastIntent": intent.name
        };
        callback(sessionAttributes,
            responseBuilder.buildSpeechletResponse(constants.cardTitle, speechOutput, repromptText, false));
    }

}


module.exports = {
    handleNextOffer : handleNextOffer
}